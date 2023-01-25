from django.db import models
from django.contrib.auth.models import AbstractUser
import datetime

class Profile(AbstractUser):

    class UserType(models.TextChoices):
        DOCTOR = 'DR' , 'Doctor'
        CARER = 'CA' , 'Carer'
        PATIENT = 'PT' ,'Patient'
    name = models.CharField(max_length=80)
    email = models.EmailField(unique=True)
    profilePic = models.ImageField(null=True, blank=True)
    usertype = models.CharField(max_length=2,choices=UserType.choices)
    birthdate = models.DateField(null=True, blank=True)            #حتة هبقى افكر انس بيها عشان ال birthdate مش هيكون لكل ال users

    def get_type(self):
        return self.usertype
    
    def get_age(self):
        return datetime.datetime.now() - self.birthdate

    def __str__(self) -> str:
        return self.email