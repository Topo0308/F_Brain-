from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from .models import Trajet, Reservation
from django.contrib.auth.decorators import login_required
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_protect


@csrf_exempt
def list_trajets(request):
    trajets = Trajet.objects.all()
    data = [
        {
            "id": t.id,
            "lieu_depart": t.lieu_depart,
            "lieu_arrivee": t.lieu_arrivee,
            "date": t.date,
            "heure": t.heure,
            "places_disponibles": t.places_disponibles,
            "conducteur": t.conducteur.username
        }
        for t in trajets
    ]
    return JsonResponse(data, safe=False)

@csrf_exempt
@login_required
def create_trajet(request):
    print("Utilisateur courant :", request.user)
    if not request.user.is_authenticated:
        return JsonResponse({"error": "Authentification requise"}, status=401)

    if request.method == "POST":
        data = json.loads(request.body)
        trajet = Trajet.objects.create(
            lieu_depart=data["lieu_depart"],
            lieu_arrivee=data["lieu_arrivee"],
            date=data["date"],
            heure=data["heure"],
            places_disponibles=data["places_disponibles"],
            conducteur=request.user
        )
        return JsonResponse({"message": "Trajet créé", "id": trajet.id})
    
    return JsonResponse({"error": "Méthode non autorisée"}, status=405)

@csrf_exempt
def reserve_trajet(request, trajet_id):
    if request.method == "POST":
        try:
            trajet = Trajet.objects.get(id=trajet_id)
            if trajet.places_disponibles > 0:
                data = json.loads(request.body)
                Reservation.objects.create(
                    trajet=trajet,
                    nom=data["nom"],
                    email=data["email"],
                    telephone=data["telephone"]
                )
                trajet.places_disponibles -= 1
                trajet.save()
                return JsonResponse({"message": "Réservation réussie"})
            else:
                return JsonResponse({"error": "Complet"}, status=400)
        except Trajet.DoesNotExist:
            return JsonResponse({"error": "Trajet non trouvé"}, status=404)
    return JsonResponse({"error": "Méthode non autorisée"}, status=405)