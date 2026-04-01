# 💧 AquaGuard AI: Water-Borne Disease Prediction System

![AquaGuard AI Banner](https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2070)

### 🛡️ AI-Powered Early Warning Surveillance
AquaGuard AI is a sophisticated full-stack surveillance system designed to forecast water-borne disease outbreaks (specifically **Cholera** and **Typhoid**) with up to 88% accuracy. By analyzing environmental, meteorological, and water quality parameters, the system provides health authorities with a **1–3 week lead time** to implement life-saving preventive measures.

---

## 📽️ Visual Journey
- **Live Assessment:** Real-time risk scoring using trained XGBoost models.
- **Analytics Dashboard:** Deep dives into 5.25M+ training records and model performance metrics.
- **Responsive Design:** Optimized for field access via mobile and tablet devices.

---

## 🏗️ Technical Architecture

### **Core Stack**
- **Frontend:** React 18 (Vite), TypeScript, Tailwind CSS, Shadcn UI, Lucide Icons.
- **Backend:** FastAPI (Python 3.12), Uvicorn.
- **Intelligence:** XGBoost Ensemble Classifier, Scikit-learn, Pandas.
- **Infrastructure:** Docker, Docker Compose, Render (CI/CD Ready).

### **Data Insights**
The model is trained on a comprehensive dataset encompassing:
- **Environmental Factors:** Rainfall (mm), Temperature (°C), Humidity (%).
- **Water Quality:** pH Levels, Treatment Status (Chlorinated/Untreated), Source type (Piped, Well, River).
- **Demographics:** Population Density, Area Type (Urban/Rural).

---

## 🚀 Getting Started

### Prerequisites
- **Docker & Docker Compose** (Recommended for zero-configuration setup)

### Local Launch (Docker)
1. **Clone the Project:**
   ```bash
   git clone https://github.com/Aashutosh-357/waterborne-disease-prediction.git
   cd waterborne-disease-prediction
   ```

2. **One-Command Boot:**
   ```bash
   docker compose up --build
   ```

3. **Access the Modules:**
   - 🌐 **Frontend UI:** `http://localhost:5173`
   - 📡 **Backend API (Swagger):** `http://localhost:8000/docs`

---

## 📡 API Reference

### Predict Outbreak Risk
`POST /api/predict`

**Request Body:**
```json
{
  "area_type": "Urban",
  "population_density": 1200,
  "water_source": "Piped",
  "water_treatment": "Chlorinated",
  "ph_level": 7.2,
  "avg_temp": 28.5,
  "avg_rainfall": 150.0,
  "avg_humidity": 75.0,
  "flooding_status": "No"
}
```

**Successful Response:**
```json
{
  "prediction": 1,
  "probability": 0.92,
  "risk_level": "High Risk",
  "recommendation": "Immediate intervention required: Chlorine distribution and public warnings."
}
```

---

## 🌍 Deployment on Render

This project is pre-configured with `Dockerfiles` optimized for Render's environment variable system.

1. **Backend:** Deploy `Backend/` as a **Web Service**. Set environment variable `PORT` to bind dynamically.
2. **Frontend:** Deploy `Frontend/` as a **Static Site**. Set `VITE_API_URL` to point to your backend.

---

## 📄 License & Attribution
- Built as a **Capstone Project** for AI-driven Public Health.
- UI Design inspired by modern glassmorphism principles.
- Dataset source: Waterborne Disease Records (Regional Health Department).

---
*Developed by Aashutosh & Empowered by AI.*
