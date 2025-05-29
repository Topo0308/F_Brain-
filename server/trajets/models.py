from django.db import models
from django.conf import settings

class Trajet(models.Model):
    lieu_depart = models.CharField(max_length=100)
    lieu_arrivee = models.CharField(max_length=100)
    date = models.DateField()
    heure = models.TimeField()
    places_disponibles = models.PositiveIntegerField()
    conducteur = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.lieu_depart} ➔ {self.lieu_arrivee} ({self.date})"

class Reservation(models.Model):
    trajet = models.ForeignKey(Trajet, on_delete=models.CASCADE)
    nom = models.CharField(max_length=100)
    email = models.EmailField()
    telephone = models.CharField(max_length=20)

    def __str__(self):
        return f"Réservation pour {self.nom} - {self.trajet}"