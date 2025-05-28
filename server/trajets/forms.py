from django import forms
from .models import Trajet

class TrajetForm(forms.ModelForm):
    class Meta:
        model = Trajet
        fields = ['lieu_depart', 'lieu_arrivee', 'date', 'heure', 'places_disponibles']
