INFRA & F_BRAIN with DOCKER in DOCKER + docker networks
Objectifs de la session
L'objectif principal de cette session était de :

Ouvrir des ports supplémentaires sur le serveur,
Créer un projet avec plusieurs services Docker (React, Django, Monitoring, Nginx),
Configurer Docker et Git pour gérer l'avancement du projet.
Étapes réalisées
1. Ouverture des ports sur le serveur
Sur le serveur, seul le port SSH était ouvert au départ. On a dû ouvrir quatre autres ports pour permettre la communication entre les différents services. Ces ports ont été configurés pour client, serveur, monitoring et proxy.

2. Création du projet sur le serveur
Une fois les ports ouverts, on a créé un nouveau dossier de projet sur le serveur. Ce dossier s'appelle F_Brain, et il contient un fichier docker-compose.yml pour orchestrer les différents services Docker.

3. Structure du projet
Dans le dossier F_Brain, voici la structure que l'on a mise en place :

client : Un dossier pour l'application React,
server : Un dossier pour l'application Django,
monitoring : Un dossier contenant les Dockerfiles et configurations pour Grafana et Prometheus,
proxy : Un dossier contenant le fichier de configuration Nginx pour servir de reverse proxy.
Dans chaque sous-dossier, on a créé un Dockerfile pour chaque service (React, Django, Grafana/Prometheus, Nginx) et configuré les projets respectifs dans ces dossiers.

4. Création des fichiers Docker
Pour chaque dossier, on a créé un fichier Dockerfile pour chaque service :

client : Dockerfile pour une application React,
server : Dockerfile pour une application Django,
monitoring : Dockerfile et fichiers de configuration pour Grafana et Prometheus,
proxy : Dockerfile et fichier de configuration pour Nginx (reverse proxy).
5. Initialisation du projet Git
Une fois que le projet était mis en place avec tous les dossiers et fichiers nécessaires, on a initialisé un dépôt Git à la racine du projet F_Brain :

git init
Ensuite, on a effectué des commits réguliers pour chaque étape de la création : • Un commit pour chaque dossier (client, server, monitoring, proxy), • Un commit pour chaque avancement dans le projet (création des fichiers Dockerfile, ajout des configurations, etc.).
