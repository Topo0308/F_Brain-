from django.test import TestCase
from django.contrib.auth.models import User

class UserTestCase(TestCase):
    def test_user_registration(self):
        user = User.objects.create_user(username="john", password="pass")
        self.assertEqual(user.username, "john")