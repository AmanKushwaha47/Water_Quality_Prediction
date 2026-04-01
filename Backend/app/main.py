from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.endpoints import router as api_router

app = FastAPI(
    title="AquaShield API",
    description="API for Waterborne Disease Outbreak Prediction",
    version="1.0.0"
)

import os

# Configure CORS
# Read the FRONTEND_URL from the environment for production, fallback to * or localhost
frontend_url = os.getenv("FRONTEND_URL", "*")
origins = [url.strip() for url in frontend_url.split(",")] if frontend_url != "*" else ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(api_router, prefix="/api")

@app.get("/")
def read_root():
    return {"message": "Welcome to AquaShield AI API"}
