export interface PredictionRequest {
  is_urban: number;
  population_density: number;
  water_source: string;
  water_treatment: string;
  ph: number;
  avg_temperature_c: number;
  avg_rainfall_mm: number;
  avg_humidity_pct: number;
  flooding: number;
}

export interface PredictionResponse {
  prediction: number;
  probability: number;
  risk_label: string;
  likely_disease: string;
  disease_probabilities: {
    cholera: number;
    typhoid: number;
  };
}

const API_BASE_URL = (import.meta.env.VITE_API_URL || '').replace(/\/$/, '');

export const predictOutbreak = async (data: PredictionRequest): Promise<PredictionResponse> => {
  const response = await fetch(`${API_BASE_URL}/api/predict`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json();
};
