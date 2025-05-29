from django.urls import path
from tajets.views import create_trajet, list_trajets, reserve_trajet
from users.views import login_user, register_user, get_user

urlpatterns = [
    path('trajets/', list_trajets),
    path('trajets/create/', create_trajet),
    path('trajets/<int:trajet_id>/reserve/', reserve_trajet),
    path('auth/login/', login_user),
    path('auth/register/', register_user),
    path('auth/user/', get_user),
]