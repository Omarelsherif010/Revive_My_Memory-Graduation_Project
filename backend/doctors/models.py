from django.db import models
from accounts.models import Profile


class Doctor(Profile,models.Model):
    class Major(models.TextChoices):
        NEUROLOGIST = 'NR' , 'Neurologist'
    
    major = models.CharField(max_length=2,choices=Major.choices,default=Major.NEUROLOGIST)


    #healthcenter = pass