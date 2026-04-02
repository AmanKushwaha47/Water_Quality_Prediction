import os
import joblib
import pandas as pd
import numpy as np

BASE_DIR = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
MODEL_PATH = os.path.join(BASE_DIR, "app", "models", "xgboost_model.pkl")
ENCODERS_PATH = os.path.join(BASE_DIR, "app", "models", "label_encoders.pkl")

# Note: The original project had paths expecting `models/xgboost_model.pkl`. 
# Now since it moved to `app/models`, we adjusted the paths here.

class PredictionService:
    def __init__(self):
        self.model = None
        self.encoders = None
        self.features = [
            'is_urban', 'population_density', 'water_source', 'water_treatment',
            'ph', 'avg_temperature_c', 'avg_rainfall_mm', 'avg_humidity_pct', 'flooding'
        ]
        self.load_artifacts()

    def _predict_disease(self, input_data: dict, outbreak_prediction: int, outbreak_probability: float) -> dict:
        # Rule-based disease scoring to provide interpretable guidance from environmental signals.
        cholera_score = 0.0
        typhoid_score = 0.0

        water_source = str(input_data.get("water_source", "")).strip().lower()
        water_treatment = str(input_data.get("water_treatment", "")).strip().lower()
        is_urban = int(input_data.get("is_urban", 0))
        flooding = int(input_data.get("flooding", 0))
        population_density = float(input_data.get("population_density", 0.0))
        ph = float(input_data.get("ph", 7.0))
        avg_temperature_c = float(input_data.get("avg_temperature_c", 25.0))
        avg_rainfall_mm = float(input_data.get("avg_rainfall_mm", 0.0))
        avg_humidity_pct = float(input_data.get("avg_humidity_pct", 0.0))

        if water_source in {"river", "well", "surface"}:
            cholera_score += 2.0
        if water_treatment in {"untreated", "none"}:
            cholera_score += 2.0
            typhoid_score += 1.0
        if flooding == 1:
            cholera_score += 2.0
        if avg_rainfall_mm >= 120:
            cholera_score += 1.0
        if avg_temperature_c >= 30:
            cholera_score += 1.0
        if ph < 6.5 or ph > 8.5:
            cholera_score += 1.0

        if population_density >= 1000:
            typhoid_score += 2.0
        if is_urban == 1:
            typhoid_score += 1.0
        if avg_humidity_pct >= 70:
            typhoid_score += 1.0
        if 20 <= avg_temperature_c <= 35:
            typhoid_score += 1.0

        logits = np.array([cholera_score, typhoid_score], dtype=float)
        exp_logits = np.exp(logits - np.max(logits))
        normalized = exp_logits / exp_logits.sum()

        cholera_probability = float(normalized[0] * outbreak_probability)
        typhoid_probability = float(normalized[1] * outbreak_probability)

        if outbreak_prediction == 0 and outbreak_probability < 0.5:
            likely_disease = "No Significant Disease Risk"
        else:
            likely_disease = "Cholera" if cholera_probability >= typhoid_probability else "Typhoid"

        return {
            "likely_disease": likely_disease,
            "disease_probabilities": {
                "cholera": cholera_probability,
                "typhoid": typhoid_probability
            }
        }

    def _heuristic_outbreak_score(self, input_data: dict) -> float:
        # Convert obvious high-risk environmental patterns into a normalized severity score.
        score = 0.0

        water_source = str(input_data.get("water_source", "")).strip().lower()
        water_treatment = str(input_data.get("water_treatment", "")).strip().lower()
        is_urban = int(input_data.get("is_urban", 0))
        flooding = int(input_data.get("flooding", 0))
        population_density = float(input_data.get("population_density", 0.0))
        ph = float(input_data.get("ph", 7.0))
        avg_temperature_c = float(input_data.get("avg_temperature_c", 25.0))
        avg_rainfall_mm = float(input_data.get("avg_rainfall_mm", 0.0))
        avg_humidity_pct = float(input_data.get("avg_humidity_pct", 0.0))

        if water_source in {"river", "open well", "pond"}:
            score += 0.18
        if water_treatment in {"untreated", "none"}:
            score += 0.22
        if flooding == 1:
            score += 0.18
        if population_density >= 1000:
            score += 0.12
        if avg_rainfall_mm >= 140:
            score += 0.12
        if avg_humidity_pct >= 75:
            score += 0.08
        if avg_temperature_c >= 30:
            score += 0.06
        if ph < 6.5 or ph > 8.5:
            score += 0.08
        if is_urban == 1 and population_density >= 1500:
            score += 0.06

        return float(min(max(score, 0.0), 1.0))

    def load_artifacts(self):
        if os.path.exists(MODEL_PATH) and os.path.exists(ENCODERS_PATH):
            self.model = joblib.load(MODEL_PATH)
            self.encoders = joblib.load(ENCODERS_PATH)
            print("Successfully loaded model and encoders.")
        else:
            print("Warning: Model or encoders not found. Run training pipeline first.")

    def predict(self, input_data: dict) -> dict:
        if self.model is None or self.encoders is None:
            return {"error": "Model not loaded"}

        df = pd.DataFrame([input_data])
        
        # Encode categorical features
        for col in ['water_source', 'water_treatment']:
            if col in df.columns and col in self.encoders:
                # Need to handle unseen labels potentially, but we'll assume valid inputs
                try:
                    df[col] = self.encoders[col].transform(df[col].astype(str))
                except ValueError:
                    # In case of unseen label, default to first class or 0
                    df[col] = 0

        # Ensure feature order matches training
        X = df[self.features]

        # Predict
        model_probability = float(self.model.predict_proba(X)[0][1])
        heuristic_probability = self._heuristic_outbreak_score(input_data)
        probability = float(max(model_probability, heuristic_probability))
        prediction = 1 if probability >= 0.5 else 0
        disease_result = self._predict_disease(input_data, int(prediction), probability)

        return {
            "prediction": int(prediction),
            "probability": float(probability),
            "risk_label": "High Risk" if prediction == 1 else "Low Risk",
            "likely_disease": disease_result["likely_disease"],
            "disease_probabilities": disease_result["disease_probabilities"]
        }

# Singleton instance
prediction_service = PredictionService()
