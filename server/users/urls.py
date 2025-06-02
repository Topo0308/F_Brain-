from django.urls import path
from users.views import get_csrf_token
from . import views

urlpatterns = [
    path('register/', views.register_user, name='register_user'),
    path('login/', views.login_user, name='login_user'),
    path('logout/', views.logout_user, name='logout_user'),
    path("csrf/", get_csrf_token),

]