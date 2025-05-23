from rest_framework import routers
from django.urls import path, include
from .views import TrajetViewSet, ReservationViewSet

router = routers.DefaultRouter()
router.register(r'trajets', TrajetViewSet, basename='trajet')
router.register(r'reservations', ReservationViewSet, basename='reservation')

urlpatterns = [
    path('', include(router.urls)),
]
