from django.contrib.auth import authenticate, login, logout
from django.contrib.auth import get_user_model
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

User = get_user_model()

@csrf_exempt
def register_user(request):
    if request.method == "POST":
        data = json.loads(request.body)
        if User.objects.filter(username=data["username"]).exists():
            return JsonResponse({"error": "Nom d'utilisateur déjà pris"}, status=400)
        user = User.objects.create_user(
            username=data["username"],
            email=data.get("email", ""),
            password=data["password"]
        )
        return JsonResponse({"message": "Utilisateur créé"})
    return JsonResponse({"error": "Méthode non autorisée"}, status=405)

@csrf_exempt
def login_user(request):
    if request.method == "POST":
        data = json.loads(request.body)
        user = authenticate(username=data["username"], password=data["password"])
        if user:
            login(request, user)
            return JsonResponse({"message": "Connexion réussie"})
        return JsonResponse({"error": "Identifiants invalides"}, status=400)
    return JsonResponse({"error": "Méthode non autorisée"}, status=405)

@csrf_exempt
def logout_user(request):
    logout(request)
    return JsonResponse({"message": "Déconnexion réussie"})
