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
}

export const predictOutbreak = async (data: PredictionRequest): Promise<PredictionResponse> => {
  const response = await fetch('/api/predict', {
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
