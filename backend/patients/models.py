from django.db import models
from accounts.models import Profile
from doctors.models import Doctor

class Patient(Profile, models.Model):
    doctor = models.ForeignKey(Doctor, on_delete=models.PROTECT)
    # vol


class Carer(models.Model):
    patient = models.ManyToManyField(Patient, related_name='carer')
    name = models.CharField(max_length=25)
    phonenumber = models.CharField(max_length=12)
    email = models.EmailField()


class Radiology(models.Model):
    patient = models.ForeignKey(Patient, on_delete=models.CASCADE)
    x_ray = models.ImageField(null=True, blank=True)

    def get_xray(self):
        return self.x_ray
