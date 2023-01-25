from django.db import models
from accounts.models import Profile
from doctors.models import Doctor
from volunteers.models import Volunteer


class Patient(Profile, models.Model):
    doctorp = models.ForeignKey(
        Doctor, on_delete=models.PROTECT, related_name='doctor_patient')
    volunteer = models.ManyToManyField(
        Volunteer, related_name='patient_volunteer')


class Carer(models.Model):
    patient = models.ManyToManyField(Patient, related_name='carer')
    name = models.CharField(max_length=25)
    phonenumber = models.CharField(max_length=12)
    email = models.EmailField()


class Radiology(models.Model):
    patient = models.ForeignKey(
        Patient, on_delete=models.CASCADE, related_name='xrays')
    x_ray = models.ImageField(null=True, blank=True)

    def get_xray(self):
        return self.x_ray
