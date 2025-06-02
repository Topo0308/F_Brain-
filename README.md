🚗 Application de Covoiturage – F_Brain
🧠 F_Brain est une plateforme web de covoiturage qui permet :

aux utilisateurs inscrits de créer des trajets depuis leur tableau de bord,

aux visiteurs de consulter ces trajets sur la page d’accueil,

et de réserver un trajet en remplissant un formulaire (nom, email, téléphone).

Le projet utilise une architecture moderne avec Docker, et s’appuie uniquement sur React (frontend) et Django (backend) – sans utiliser Django REST Framework.

🧱 Structure du projet
F_Brain/
├── client/                          # Frontend React
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   ├── index.html
│   ├── context/
│   │   └── auths.js
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── Dashboard.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── CreateTrajet.jsx
│   │   └── Reserve.jsx
│   └── package.json
│
├── server/                          # Backend Django
│   ├── manage.py
│   ├── myproject/
│   │   ├── __init__.py
│   │   ├── settings.py
│   │   ├── urls.py
│   │   └── wsgi.py
│   ├── tajets/
│   │   ├── __init__.py
│   │   ├── models.py
│   │   ├── views.py
│   │   └── admin.py
│   ├── users/
│   │   ├── __init__.py
│   │   ├── models.py
│   │   ├── views.py
│   │   └── admin.py
│
├── proxy/                           # Nginx reverse proxy
│   └── nginx.conf
│
├── monitoring/                      # Prometheus + Grafana config
│   ├── prometheus.yml
│   └── grafana.ini
│
├── docker-compose.yml               # Déploiement
└── README.md                        # Documentation du projet

⚙️ Fonctionnalités
Frontend – React
Inscription et connexion utilisateur

Création de trajets (dashboard)

Affichage des trajets sur la page d’accueil

Réservation d’un trajet avec saisie des infos personnelles

Filtres par lieu, date et heure

Backend – Django (sans REST Framework)
Authentification manuelle via views

Gestion des trajets (CRUD)

Réservations

Base de données PostgreSQL

Proxy – Nginx
Redirection des requêtes HTTP (vers React ou Django)

Sécurisation des endpoints via reverse proxy

Monitoring – Prometheus & Grafana
Suivi des performances du backend (requêtes, temps de réponse)

Statistiques système (CPU, RAM)

Dashboards personnalisables dans Grafana

🔄 Git & DevOps
Stratégie Git
feature_<nom> : une branche par fonctionnalité

dev : branche d’intégration continue

main : branche de production stable

Intégration Continue (CI)
Tests automatiques à chaque push sur dev

Build Docker automatique

Vérification des dépendances