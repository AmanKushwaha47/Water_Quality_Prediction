import { useState } from 'react';
import { predictOutbreak, PredictionRequest, PredictionResponse } from '../services/api';

export const usePrediction = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<PredictionResponse | null>(null);

  const submitPrediction = async (data: PredictionRequest) => {
    setLoading(true);
    setError(null);
    try {
      const response = await predictOutbreak(data);
      setResult(response);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unknown error occurred');
      }
    } finally {
      setLoading(false);
    }
  };

  return {
    submitPrediction,
    loading,
    error,
    result,
    setResult
  };
};
