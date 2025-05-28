from rest_framework import generics
from rest_framework.permissions import AllowAny
from django.contrib.auth import get_user_model

from .serializers import RegisterSerializer, CustomTokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

User = get_user_model()

# === Vue d'inscription ===
class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = RegisterSerializer
    permission_classes = [AllowAny]


# === Vue pour l'obtention du token JWT avec serializer personnalisé ===
class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer
