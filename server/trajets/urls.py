from django.urls import path
from . import views

urlpatterns = [
    path('trajets/', views.list_trajets, name='list_trajets'),
    path('trajets/<int:trajet_id>/', views.get_trajet, name='get_trajet'), 
    path('trajets/create/', views.create_trajet, name='create_trajet'),
    path('trajets/<int:trajet_id>/reserve/', views.reserve_trajet, name='reserve_trajet'),
]