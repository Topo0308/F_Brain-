Objectif du projet

Mettre en place une application complète composée de plusieurs services (frontend, backend, monitoring), chacun dans un conteneur Docker, accessible depuis l’extérieur via un reverse proxy (NGINX). Chaque service doit être testé, bien structuré, et facilement déployable.

⸻

1. Organisation des services

L’application est divisée en 3 services principaux :
	•	Client (frontend)
	•	Server (backend)
	•	Monitoring (outil type Grafana ou autre)

Chaque service a :
	•	Un Dockerfile pour définir comment il est construit.
	•	Des tests unitaires (à automatiser si possible).
	•	Une configuration pour être intégré dans un docker-compose.yml.

⸻

2. Reverse Proxy (NGINX)

Un Reverse Proxy (probablement via NGINX) est mis au centre pour :
	•	Rediriger le trafic externe vers les bons services internes.
	•	Rendre l’ensemble de l’application accessible via un seul point d’entrée (par exemple localhost, ou une IP publique).

⸻

3. Exposition des ports

Certains ports doivent être exposés à l’extérieur pour accéder aux services :
4. Ce qu’il y a à faire concrètement

A. Pour chaque service (client, server, monitoring)
	•	Créer un Dockerfile pour le conteneuriser.
	•	Écrire des tests unitaires.
	•	Ajouter une configuration dans un fichier docker-compose.yml.
	•	S’assurer que chaque service fonctionne sur le bon port interne.

B. Reverse Proxy avec NGINX
	•	Créer un conteneur NGINX :
	•	Avec un Dockerfile
	•	Un fichier de configuration nginx.conf qui :
	•	Redirige / vers le client
	•	Redirige /api vers le serveur
	•	Redirige /monitoring vers l’outil de monitoring
	•	Ajouter ce conteneur dans le docker-compose.yml.

C. Réseaux et ports
	•	Configurer docker-compose pour :
	•	Relier tous les services dans le même réseau Docker.
	•	Exposer les ports listés ci-dessus vers l’extérieur.

D. Vérifications finales
	•	Tester l’accès à chaque service via le reverse proxy.
	•	S’assurer que les ports fonctionnent.
	•	Vérifier que tout fonctionne même sans accès direct aux services (grâce au proxy).
