# Use an official, lightweight Python 3.12 image
FROM python:3.12-slim

# Set environment variables to avoid python writing .pyc files and buffer issues
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# Set the working directory in the container
WORKDIR /app

# Install system dependencies (sometimes required for compiled python packages like numpy/pandas)
RUN apt-get update && apt-get install -y \
    build-essential \
    && rm -rf /var/lib/apt/lists/*

# Copy the requirements file first to leverage Docker layer caching
COPY requirements.txt .

# Install the Python dependencies
RUN pip install --no-cache-dir -r requirements.txt

RUN adduser --disabled-password appuser
USER appuser

# Copy the rest of your application code into the container
COPY --chown=appuser:appuser . .

# Expose the port FastAPI runs on
EXPOSE 8000

# Run the FastAPI application using the PORT environment variable provided by Render (defaulting to 8000)
CMD ["sh", "-c", "uvicorn app.main:app --host 0.0.0.0 --port ${PORT:-8000}"]
