FROM python:3.9-slim

# Ou plus précisément (même patch version, si tu veux 3.9.2)
FROM python:3.9.2-slim

WORKDIR /srv/app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY . .
EXPOSE 8000
CMD ["gunicorn", "myproject.wsgi:application", "--bind", "0.0.0.0:8000"]

