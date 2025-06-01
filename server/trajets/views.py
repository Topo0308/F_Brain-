from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from .models import Trajet, Reservation
from django.contrib.auth.decorators import login_required
from django.utils.decorators import method_decorator

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
    if request.method == "POST":
        data = json.loads(request.body)
        trajet = Trajet.objects.create(
            lieu_depart=data["lieu_depart"],
            lieu_arrivee=data["lieu_arrivee"],
            date=data["date"],
            heure=data["heure"],
            places_disponibles=int(data["places_disponibles"]),
            conducteur=request.user
        )
        return JsonResponse({"message": "Trajet créé", "id": trajet.id})
    return JsonResponse({"error": "Méthode non autorisée"}, status=405)


@csrf_exempt
def reserve_trajet(request, trajet_id):
    if request.method == "POST":
        try:
            trajet = Trajet.objects.get(id=trajet_id)
            data = json.loads(request.body)
            places_demandées = int(data.get("places_souhaitees", 1))

            if places_demandées <= 0:
                return JsonResponse({"error": "Nombre de places invalide"}, status=400)

            if trajet.places_disponibles >= places_demandées:
                Reservation.objects.create(
                    trajet=trajet,
                    nom=data["nom"],
                    email=data["email"],
                    telephone=data["telephone"],
                    places_souhaitees=places_demandées
                )
                trajet.places_disponibles -= places_demandées
                trajet.save()
                return JsonResponse({"message": f"Réservation réussie pour {places_demandées} place(s)."})
            else:
                return JsonResponse({"error": "Pas assez de places disponibles"}, status=400)

        except Trajet.DoesNotExist:
            return JsonResponse({"error": "Trajet non trouvé"}, status=404)
        except KeyError:
            return JsonResponse({"error": "Champs manquants"}, status=400)
    return JsonResponse({"error": "Méthode non autorisée"}, status=405)

@csrf_exempt
def get_trajet(request, trajet_id):
    try:
        trajet = Trajet.objects.get(id=trajet_id)
        data = {
            "id": trajet.id,
            "lieu_depart": trajet.lieu_depart,
            "lieu_arrivee": trajet.lieu_arrivee,
            "date": trajet.date,
            "heure": trajet.heure,
            "places_disponibles": trajet.places_disponibles,
            "conducteur": trajet.conducteur.username
        }
        return JsonResponse(data)
    except Trajet.DoesNotExist:
        return JsonResponse({"error": "Trajet non trouvé"}, status=404)
