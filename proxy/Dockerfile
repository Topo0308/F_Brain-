# proxy/Dockerfile
FROM nginx:stable-alpine

# Copier le fichier nginx.conf 
COPY nginx.conf /etc/nginx/nginx.conf

# Exposer le port 80 pour les connexions HTTP
EXPOSE 80    

# Exposer le port 443 pour les connexions HTTPS
 EXPOSE 443 

# Commande pour lancer nginx en mode premier plan 
CMD ["nginx", "-g", "daemon off;"]

