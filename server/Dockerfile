FROM python:3.12

WORKDIR /app

COPY requirements.txt .

# ✅ Met à jour pip ici
RUN python -m pip install --upgrade pip

# ✅ Puis installe les dépendances
RUN pip install --no-cache-dir -r requirements.txt


COPY . .

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]



