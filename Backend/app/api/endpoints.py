from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import Dict
from app.services.prediction_service import prediction_service

router = APIRouter()

class PredictionRequest(BaseModel):
    is_urban: int
    population_density: float
    water_source: str
    water_treatment: str
    ph: float
    avg_temperature_c: float
    avg_rainfall_mm: float
    avg_humidity_pct: float
    flooding: int

class PredictionResponse(BaseModel):
    prediction: int
    probability: float
    risk_label: str
    likely_disease: str
    disease_probabilities: Dict[str, float]
    error: str = None

@router.post("/predict", response_model=PredictionResponse)
def predict_outbreak(request: PredictionRequest):
    result = prediction_service.predict(request.model_dump())
    if "error" in result:
        raise HTTPException(status_code=500, detail=result["error"])
    return result
