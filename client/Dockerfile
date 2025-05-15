# Client/Dockerfile
FROM node:18-alpine AS builder
WORKDIR /app

# Installer Yarn
RUN corepack enable && corepack prepare yarn@stable --activate

COPY package*.json ./
RUN yarn install

COPY . .
RUN yarn build     # produit /app/dist

FROM nginx:stable-alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80


