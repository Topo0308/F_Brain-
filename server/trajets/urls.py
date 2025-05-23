from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import TrajetViewSet, ReservationViewSet

router = DefaultRouter()
router.register(r'trajets', TrajetViewSet)
router.register(r'reservations', ReservationViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
