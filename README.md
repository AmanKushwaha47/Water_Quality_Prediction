# AquaGuard AI 💧

A full-stack, AI-powered early warning system designed to predict water-borne disease outbreaks (like Cholera and Typhoid) 1-3 weeks in advance. Built with FastAPI, XGBoost, and React+Vite, this system leverages environmental parameters to enable proactive public health interventions.

## 🚀 Quick Start (Docker)

The entire application is completely containerized. You do not need to install Node or Python locally to run this project.

### Prerequisites
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) installed and running.

### Running the App
1. Clone the repository:
   ```bash
   git clone https://github.com/Aashutosh-357/waterborne-disease-prediction.git
   cd waterborne-disease-prediction
   ```
2. Build and start the services:
   ```bash
   docker compose up --build
   ```
3. Access the application:
   - **Frontend Dashboard:** [http://localhost:5173](http://localhost:5173)
   - **Backend API Swagger Docs:** [http://localhost:8000/docs](http://localhost:8000/docs)

## 🏗️ Technical Architecture

- **Frontend:** React, Vite, TypeScript, TailwindCSS, Shadcn UI
- **Backend:** Python, FastAPI, Uvicorn
- **AI/ML Engine:** XGBoost Classifier, Scikit-Learn
- **Orchestration:** Docker & Docker Compose

## 🤖 API Endpoints
The FastAPI backend serves the XGBoost model natively. You can integrate it with any external system.

**Endpoint:** `POST /api/predict`
```json
// Example Request Body
{
  "pH": 7.2,
  "Iron": 0.05,
  "Nitrate": 1.2,
  "Chloride": 25.0,
  "Lead": 0.001,
  "Zinc": 1.5,
  "Turbidity": 2.1,
  "Fluoride": 0.8,
  "Copper": 0.1,
  ...
}
```

## 🌐 Deployment
This repository includes Dockerfiles built specifically for immediate hosting on platforms like **Render.com**. Deploy the `Backend` directory as a Docker Web Service, and the `Frontend` directory as a Node Static Site.

---
*Built for public health security and proactive environmental monitoring.*
