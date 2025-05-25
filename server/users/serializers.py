from rest_framework import serializers
from .models import CustomUser
from django.contrib.auth.password_validation import validate_password

class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    password2 = serializers.CharField(write_only=True)

    class Meta:
        model = CustomUser
        fields = ['username', 'email', 'tel', 'has_permis', 'password', 'password2']

    def validate(self, data):
        if data['password'] != data['password2']:
            raise serializers.ValidationError("Les mots de passe ne correspondent pas.")
        return data

    def create(self, validated_data):
        validated_data.pop('password2')  # retirer password2 qui n'est pas dans le modèle
        password = validated_data.pop('password')  # extraire password
        user = CustomUser(**validated_data)        # créer l'instance sans password
        user.set_password(password)                 # hasher et définir le mot de passe
        user.save()                                 # sauvegarder dans la DB
        return user
