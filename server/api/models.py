from django.db import models
from django.contrib.auth.models import User

class Trajet(models.Model):
    conducteur = models.ForeignKey(User, on_delete=models.CASCADE)
    lieu_depart = models.CharField(max_length=100)
    lieu_arrivee = models.CharField(max_length=100)
    date = models.DateField()
    heure = models.TimeField()
    places_disponibles = models.IntegerField()

    def __str__(self):
        return f"{self.lieu_depart} -> {self.lieu_arrivee}"

class Reservation(models.Model):
    passager = models.ForeignKey(User, on_delete=models.CASCADE)
    trajet = models.ForeignKey(Trajet, on_delete=models.CASCADE)
    informations = models.TextField()
