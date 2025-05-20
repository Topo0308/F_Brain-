from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Trajet, Reservation

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email']

class TrajetSerializer(serializers.ModelSerializer):
    conducteur = UserSerializer(read_only=True)

    class Meta:
        model = Trajet
        fields = '__all__'

class ReservationSerializer(serializers.ModelSerializer):
    passager = UserSerializer(read_only=True)

    class Meta:
        model = Reservation
        fields = '__all__'
