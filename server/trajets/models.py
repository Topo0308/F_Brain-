from django.db import models
from django.conf import settings

class Trajet(models.Model):
    conducteur = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='trajets')
    lieu_depart = models.CharField(max_length=100)
    lieu_arrivee = models.CharField(max_length=100)
    date = models.DateField()
    heure = models.TimeField()
    places_disponibles = models.IntegerField()

    def __str__(self):
        return f"{self.lieu_depart} ➡ {self.lieu_arrivee} le {self.date}"

class Reservation(models.Model):
    trajet = models.ForeignKey(Trajet, on_delete=models.CASCADE, related_name='reservations')
    passager = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='reservations_trajets', null=True)
    places_reservees = models.PositiveIntegerField(default=1)


    def __str__(self):
        return f"{self.passager.username} - {self.trajet}"
