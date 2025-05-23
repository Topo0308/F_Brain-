from django.contrib import admin
from django.urls import path, include
from django_prometheus import exports
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')),
    path('api/trajets/', include('trajets.urls')),  # <--- ici on inclut l'app trajets
    path('api/token/', TokenObtainPairView.as_view()),
    path('api/token/refresh/', TokenRefreshView.as_view()),
    path('metrics', exports.ExportToDjangoView, name="prometheus-django-metrics"),
]
