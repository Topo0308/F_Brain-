from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from .models import Trajet, Reservation
from django.contrib.auth.decorators import login_required

@csrf_exempt
def list_trajets(request):
    trajets = Trajet.objects.all().values()
    return JsonResponse(list(trajets), safe=False)

@csrf_exempt
def create_trajet(request):
    data = json.loads(request.body)
    trajet = Trajet.objects.create(**data)
    return JsonResponse({"message": "Trajet créé"})

@csrf_exempt
def reserve_trajet(request, trajet_id):
    trajet = Trajet.objects.get(id=trajet_id)
    if trajet.places_disponibles > 0:
        data = json.loads(request.body)
        Reservation.objects.create(trajet=trajet, **data)
        trajet.places_disponibles -= 1
        trajet.save()
        return JsonResponse({"message": "Réservation réussie"})
    return JsonResponse({"error": "Complet"}, status=400)