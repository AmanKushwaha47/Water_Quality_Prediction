import React, { useState } from 'react';
import { Activity, AlertTriangle, CheckCircle, Loader2 } from 'lucide-react';
import { usePrediction } from '../hooks/usePrediction';
import { PredictionRequest } from '../services/api';

export const PredictionForm: React.FC = () => {
  const { submitPrediction, loading, error, result, setResult } = usePrediction();
  
  const [formData, setFormData] = useState<PredictionRequest>({
    is_urban: 1,
    population_density: 500,
    water_source: 'Piped',
    water_treatment: 'Chlorinated',
    ph: 7.2,
    avg_temperature_c: 25.5,
    avg_rainfall_mm: 120.5,
    avg_humidity_pct: 65.0,
    flooding: 0
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const numFields = ['is_urban', 'population_density', 'ph', 'avg_temperature_c', 'avg_rainfall_mm', 'avg_humidity_pct', 'flooding'];
    
    setFormData(prev => ({
      ...prev,
      [name]: numFields.includes(name) ? Number(value) : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submitPrediction(formData);
  };

  return (
    <div className="bg-card border border-border rounded-2xl overflow-hidden w-full h-full flex flex-col">
      <div className="bg-teal-950/30 border-b border-border px-6 py-4 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-3">
          <Activity className="w-5 h-5 text-teal-400" />
          <span className="font-semibold">Predict Outbreak Risk</span>
        </div>
        {result && (
          <button 
            type="button" 
            onClick={() => setResult(null)}
            className="text-xs px-2 py-1 bg-secondary rounded hover:bg-accent"
          >
            Reset
          </button>
        )}
      </div>
      
      <div className="p-6 flex-grow flex flex-col justify-center">
        {result ? (
          <div className={`w-full p-6 rounded-xl border ${result.prediction === 1 ? 'border-red-500/50 bg-red-950/20' : 'border-green-500/50 bg-green-950/20'} flex flex-col items-center justify-center text-center space-y-4`}>
            {result.prediction === 1 ? (
              <AlertTriangle className="w-16 h-16 text-red-500" />
            ) : (
              <CheckCircle className="w-16 h-16 text-green-500" />
            )}
            <div>
              <h3 className={`text-2xl font-bold ${result.prediction === 1 ? 'text-red-400' : 'text-green-400'}`}>
                {result.risk_label}
              </h3>
              <p className="text-muted-foreground mt-2">
                Outbreak Probability: {(result.probability * 100).toFixed(1)}%
              </p>
              <p className="text-muted-foreground mt-2">
                Likely Disease: <span className="font-semibold text-foreground">{result.likely_disease}</span>
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                Cholera: {(result.disease_probabilities.cholera * 100).toFixed(1)}% | Typhoid: {(result.disease_probabilities.typhoid * 100).toFixed(1)}%
              </p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <p className="text-sm text-muted-foreground mb-4">
              Enter environmental and water quality parameters for instant risk assessment.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Type Category */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground block">Area Type</label>
                <select 
                  name="is_urban" 
                  value={formData.is_urban} 
                  onChange={handleChange}
                  className="w-full bg-background border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-teal-500"
                >
                  <option value={1}>Urban</option>
                  <option value={0}>Rural</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground block">Population Density</label>
                <input 
                  type="number" 
                  name="population_density" 
                  value={formData.population_density} 
                  onChange={handleChange}
                  className="w-full bg-background border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-teal-500"
                />
              </div>

              {/* Water */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground block">Water Source</label>
                <select 
                  name="water_source" 
                  value={formData.water_source} 
                  onChange={handleChange}
                  className="w-full bg-background border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-teal-500"
                >
                  <option value="Borewell">Borewell</option>
                  <option value="Open Well">Open Well</option>
                  <option value="Piped">Piped</option>
                  <option value="Pond">Pond</option>
                  <option value="Rainwater">Rainwater</option>
                  <option value="River">River</option>
                  <option value="Tanker">Tanker</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground block">Water Treatment</label>
                <select 
                  name="water_treatment" 
                  value={formData.water_treatment} 
                  onChange={handleChange}
                  className="w-full bg-background border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-teal-500"
                >
                  <option value="Untreated">Untreated</option>
                  <option value="Boiled">Boiled</option>
                  <option value="Filtered">Filtered</option>
                  <option value="Chlorinated">Chlorinated</option>
                </select>
              </div>

              {/* Stats */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground block">pH Level</label>
                <input 
                  type="number" 
                  step="0.1" 
                  name="ph" 
                  value={formData.ph} 
                  onChange={handleChange}
                  className="w-full bg-background border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-teal-500"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground block">Avg Temperature (°C)</label>
                <input 
                  type="number" 
                  step="0.1" 
                  name="avg_temperature_c" 
                  value={formData.avg_temperature_c} 
                  onChange={handleChange}
                  className="w-full bg-background border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-teal-500"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground block">Avg Rainfall (mm)</label>
                <input 
                  type="number" 
                  step="0.1" 
                  name="avg_rainfall_mm" 
                  value={formData.avg_rainfall_mm} 
                  onChange={handleChange}
                  className="w-full bg-background border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-teal-500"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground block">Avg Humidity (%)</label>
                <input 
                  type="number" 
                  step="0.1" 
                  name="avg_humidity_pct" 
                  value={formData.avg_humidity_pct} 
                  onChange={handleChange}
                  className="w-full bg-background border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-teal-500"
                />
              </div>

              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-medium text-muted-foreground block">Flooding Status</label>
                <select 
                  name="flooding" 
                  value={formData.flooding} 
                  onChange={handleChange}
                  className="w-full bg-background border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-teal-500"
                >
                  <option value={1}>Yes</option>
                  <option value={0}>No</option>
                </select>
              </div>
            </div>

            {error && (
              <div className="p-3 bg-red-950/50 border border-red-800 rounded-lg text-sm text-red-400">
                {error}
              </div>
            )}

            <button 
              type="submit" 
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 px-4 py-2 mt-4 bg-teal-600 hover:bg-teal-700 text-white rounded-lg transition-colors disabled:opacity-50"
            >
              {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Predict Risk'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
