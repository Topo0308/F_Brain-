from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    email = models.EmailField(unique=True)           # Email unique (important)
    tel = models.CharField(max_length=20, blank=True)  # Téléphone facultatif
    has_permis = models.BooleanField(default=False)    # Booléen "a le permis" par défaut False

    REQUIRED_FIELDS = ['email']

    def __str__(self):
        return self.username  # Affiche le username dans l’admin ou ailleurs
