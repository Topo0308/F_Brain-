🚗 Application de Covoiturage – F_Brain
🧠 Projet F_Brain – Application Web de Covoiturage
Cette application est une plateforme web de covoiturage conçue pour permettre aux utilisateurs de proposer ou de réserver des trajets. Elle s’appuie sur une architecture moderne et conteneurisée basée sur Docker, intégrant React, Django, Nginx, Grafana, et Prometheus.

🧱 Structure du Projet
bash
Copier
Modifier
F_Brain/
│
├── client/          # Frontend React
├── server/          # Backend Django + DRF
├── proxy/           # Nginx reverse proxy
├── monitoring/      # Grafana + Prometheus
├── docker-compose.yml
└── README.md
⚙️ Fonctionnalités principales
Frontend – React
Page d'inscription et de connexion

Liste des trajets proposés avec le nombre de places disponibles

Filtres : lieu de départ, d'arrivée, date, heure

Réservation d’un trajet avec informations personnelles

Backend – Django + Django REST Framework
Authentification JWT des utilisateurs

API REST complète :

CRUD des trajets

Réservations

Base de données relationnelle (PostgreSQL)

Proxy – Nginx
Redirection des requêtes HTTP vers le backend ou le frontend

Sécurisation des endpoints via un reverse proxy

Monitoring – Prometheus & Grafana
Monitoring du backend (temps de réponse, nombre de requêtes)

Statistiques système (CPU, RAM, latence)

Dashboard personnalisables dans Grafana

🔄 Workflow Git & DevOps
🔧 Stratégie Git
Feature_<Nom> : une branche par fonctionnalité

Dev : branche d'intégration continue (CI)

Main / Master : branche de production stable

✅ Intégration Continue (CI)
Sur chaque push vers Dev :

✅ Exécution de tests unitaires

✅ Build Docker automatique

✅ Vérification des dépendances

🚀 Déploiement Continu (CD)
Si le build est validé : docker-compose up

Déploiement sur environnement de test

Une fois validé : merge vers master

▶️ Lancer le projet localement
# Lancer tous les services
docker-compose up --build
👥 Contributeurs
Nelson (Feature_Nelson)

TCHAPDA MBE NELSON