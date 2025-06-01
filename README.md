# 🚗 F_Brain – Application de Covoiturage

**F_Brain** est une plateforme web moderne de covoiturage conçue pour faciliter la mise en relation entre conducteurs et passagers.  
L'application permet à chacun de créer, consulter et réserver des trajets de manière simple et intuitive.

---

## 🧠 Fonctionnalités clés

### Pour les utilisateurs :
- Inscription et connexion sécurisées
- Création de trajets depuis un tableau de bord personnel
- Consultation des trajets disponibles sur la page d’accueil
- Réservation d’un trajet avec saisie :
  - du nom
  - de l’email
  - du téléphone
  - **du nombre de places souhaitées** (selon la disponibilité)


## 🧱 Structure du projet simple du projet

F_Brain/
├── client/src/ # Frontend React
│ ├── App.jsx
│ ├── App.css
│ ├── main.jsx
│ ├── index.html
│ ├── context/
│ │ └── auths.js
│ ├── components/
│ │ ├── Navbar.jsx
│ │ └── Dashboard.jsx
│ ├── pages/
│ │ ├── Home.jsx
│ │ ├── Login.jsx
│ │ ├── Register.jsx
│ │ ├── CreateTrajet.jsx
│ │ └── Reserve.jsx
│ └── package.json
│
├── server/ # Backend Django
│ ├── manage.py
│ ├── myproject/
│ │ ├── init.py
│ │ ├── settings.py
│ │ ├── urls.py
│ │ └── wsgi.py
│ ├── trajets/
│ │ ├── init.py
│ │ ├── models.py
│ │ ├── views.py
│ │ ├── urls.py
│ │ └── admin.py
│ ├── users/
│ │ ├── init.py
│ │ ├── models.py
│ │ ├── views.py
│ │ └── admin.py
│
├── proxy/ # Nginx reverse proxy
│ └── nginx.conf
│
├── monitoring/ # Prometheus + Grafana config
│ ├── prometheus.yml
│ └── grafana.ini
│
├── docker-compose.yml # Déploiement avec Docker
└── README.md # Documentation du projet

## ⚙️ Stack technique

### 🎨 Frontend – React
- Authentification
- Création et affichage de trajets
- Réservation avec formulaire complet
- Choix dynamique du nombre de places restantes

### 🔧 Backend – Django (sans Django REST Framework)
- Authentification personnalisée via `views.py`
- Modèles `Trajet` et `Réservation` avec gestion des places disponibles
- Base de données PostgreSQL

### 🌐 Reverse Proxy – Nginx
- Redirection des requêtes vers les services frontend/backend
- Sécurisation des accès

### 📊 Monitoring – Prometheus & Grafana
- Statistiques système (CPU, RAM, etc.)
- Analyse des performances backend

---

## 🔄 Git & DevOps

### Stratégie Git
- `feature_<nom>` : branche dédiée à une fonctionnalité
- `dev` : branche d’intégration continue
- `main` : branche stable pour la production

### CI/CD
- Tests automatiques à chaque push sur `dev`
- Build Docker automatisé
- Vérification des dépendances
