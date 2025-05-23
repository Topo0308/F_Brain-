from rest_framework import serializers
from django.contrib.auth.models import User

class RegisterSerializer(serializers.ModelSerializer):
    password2 = serializers.CharField(write_only=True)
    tel = serializers.CharField(write_only=True)
    has_permis = serializers.BooleanField(write_only=True)

    class Meta:
        model = User
        fields = ['username', 'email', 'tel', 'has_permis', 'password', 'password2']
        extra_kwargs = {
            'password': {'write_only': True},
            'email': {'required': True},
        }

    def validate(self, data):
        if data['password'] != data['password2']:
            raise serializers.ValidationError({"password": "Les mots de passe ne correspondent pas."})
        return data

    def create(self, validated_data):
        tel = validated_data.pop('tel')
        has_permis = validated_data.pop('has_permis')
        validated_data.pop('password2')
        
        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password'],
        )
        
        # Ici tu peux stocker tel et has_permis dans un profil lié à l’utilisateur
        # Par exemple si tu as un modèle Profile:
        # Profile.objects.create(user=user, tel=tel, has_permis=has_permis)
        #
        # Sinon, si tu veux garder simple pour l'instant, tu peux juste les ignorer ou
        # créer un champ personnalisé dans User via un User model custom
        
        return user
