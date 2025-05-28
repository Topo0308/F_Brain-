from rest_framework import viewsets, permissions
from .models import Trajet, Reservation
from .serializers import TrajetSerializer, ReservationSerializer

class TrajetViewSet(viewsets.ModelViewSet):
    queryset = Trajet.objects.all()
    serializer_class = TrajetSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save()

class ReservationViewSet(viewsets.ModelViewSet):
    queryset = Reservation.objects.all()
    serializer_class = ReservationSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save()
