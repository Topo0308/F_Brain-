from django.db import models
from django.contrib.auth.models import User

class Trajet(models.Model):
    lieu_depart = models.CharField(max_length=100)
    lieu_arrivee = models.CharField(max_length=100)
    date = models.DateField()
    heure = models.TimeField()
    places_disponibles = models.IntegerField()

    def __str__(self):
        return f"{self.lieu_depart} ➡ {self.lieu_arrivee} le {self.date}"

class Reservation(models.Model):
    trajet = models.ForeignKey(Trajet, on_delete=models.CASCADE)
    passager = models.ForeignKey(User, on_delete=models.CASCADE, related_name='trajets_reservations')
    nombre_places = models.PositiveIntegerField(default=1)
    date_reservation = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Réservation de {self.passager} pour {self.trajet}"
