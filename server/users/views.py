from django.contrib.auth import authenticate, login
from django.contrib.auth.models import User
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from .models import CustomUser

@csrf_exempt
def login_user(request):
    data = json.loads(request.body)
    user = authenticate(username=data['username'], password=data['password'])
    if user:
        login(request, user)
        return JsonResponse({"message": "Connecté"})
    return JsonResponse({"error": "Erreur de connexion"}, status=400)

@csrf_exempt
def register_user(request):
    data = json.loads(request.body)
    user = CustomUser.objects.create_user(username=data['username'], password=data['password'])
    return JsonResponse({"message": "Utilisateur créé"})

def get_user(request):
    if request.user.is_authenticated:
        return JsonResponse({"username": request.user.username})
    return JsonResponse({"user": None})