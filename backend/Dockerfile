# Imagen base oficial de Python
FROM python:3.12-slim

# Evita archivos .pyc y buffer de salida
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# Directorio de trabajo dentro del contenedor
WORKDIR /app

# Dependencias del sistema necesarias (PostgreSQL, compilación)
RUN apt update && apt install -y \
    build-essential \
    libpq-dev \
    && rm -rf /var/lib/apt/lists/*

# Copiar e instalar dependencias Python
COPY requirements.txt .
RUN pip install --upgrade pip \
    && pip install --no-cache-dir -r requirements.txt

# Copiar todo el proyecto
COPY . .

# Puerto expuesto (informativo)
EXPOSE 8000

# Comando por defecto (puede ser sobrescrito por docker-compose)
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
