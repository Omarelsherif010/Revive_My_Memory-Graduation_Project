from django.db import models
from django.contrib.auth.models import AbstractUser
import datetime

class Profile(AbstractUser):
    name = models.CharField(max_length=80)
    email = models.EmailField(unique=True)
    profilePic = models.ImageField(null=True, blank=True)
    USERTYPE = (
        ('DOCTOR', 'Dr'),
        ('CARER', 'CA'),
        ('PATIENT', 'P'),
    )
    type = models.CharField(choices=USERTYPE, max_length=10)
    birthdate = models.DateField(null=True, blank=True)

    def get_type(self):
        return self.type
    
    def get_age(self):
        return datetime.datetime.now() - self.birthdate

    def __str__(self) -> str:
        return self.email