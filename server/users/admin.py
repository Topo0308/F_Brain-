from django.contrib import admin
from django.contrib.auth.models import User

admin.site.unregister(User)
admin.site.register(User)


# users/apps.py
from django.apps import AppConfig

class UsersConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'users'
