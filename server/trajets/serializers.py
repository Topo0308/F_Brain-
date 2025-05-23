from rest_framework import serializers
from .models import Trajet

class TrajetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Trajet
        fields = '__all__'
