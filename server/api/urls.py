from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import TrajetViewSet, ReservationViewSet

router = DefaultRouter()
router.register('trajets', TrajetViewSet)
router.register('reservations', ReservationViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
