from django.test import TestCase
from django.contrib.auth.models import User
from .models import Trajet, Reservation
from django.utils import timezone
from datetime import timedelta

class TrajetModelTest(TestCase):
    def test_creation_trajet(self):
        user = User.objects.create_user(username="testuser", password="12345")
        trajet = Trajet.objects.create(
            lieu_depart="Paris",
            lieu_arrivee="Lyon",
            date=timezone.now().date() + timedelta(days=1),
            heure=timezone.now().time(),
            places_disponibles=3,
            conducteur=user
        )
        self.assertEqual(str(trajet), f"Paris ➔ Lyon ({trajet.date})")