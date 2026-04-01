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
        prediction = self.model.predict(X)[0]
        probability = self.model.predict_proba(X)[0][1]

        return {
            "prediction": int(prediction),
            "probability": float(probability),
            "risk_label": "High Risk" if prediction == 1 else "Low Risk"
        }

# Singleton instance
prediction_service = PredictionService()
