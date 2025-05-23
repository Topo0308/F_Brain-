from django.db import models

class Trajet(models.Model):
    lieu_depart = models.CharField(max_length=100)
    lieu_arrivee = models.CharField(max_length=100)
    date = models.DateField()
    heure = models.TimeField()
    places_disponibles = models.IntegerField()

    def __str__(self):
        return f"{self.lieu_depart} ➡ {self.lieu_arrivee} le {self.date}"
