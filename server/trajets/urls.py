# server/trajets/urls.py
from django.urls import path
from .views import TrajetListCreateView

urlpatterns = [
    path('', TrajetListCreateView.as_view(), name='trajet-list-create'),
]
