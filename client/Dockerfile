# Client/Dockerfile
# ---- Build Stage ----
FROM node:18-alpine AS builder
WORKDIR /app

# Activer Corepack et Yarn
RUN corepack enable && corepack prepare yarn@stable --activate

# Copier les fichiers Yarn 2 nécessaires
COPY package.json yarn.lock .yarnrc.yml ./
COPY .yarn .yarn

# Installer sans exécuter de build natif (ex: rollup)
RUN yarn install --mode=skip-build

# Copier le reste du code
COPY . .

# Maintenant qu'on a tout, on peut builder
RUN yarn build

# ---- Nginx Static Server ----
FROM nginx:stable-alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80


