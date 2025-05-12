# monitoring/grafana/Dockerfile
FROM grafana/grafana:latest

# Copie des datasources et dashboards (config auto)
COPY provisioning /etc/grafana/provisioning

EXPOSE 3000
