from django.db import models
from accounts.models import Profile
from doctors.models import Doctor
from volunteers.models import Volunteer


# via doctor
class Radiology(models.Model):
    x_ray = models.ImageField(null=True, blank=True, default=None)

    def get_xray(self):
        return self.x_ray


class Patient(Profile, models.Model):
    doctorp = models.ForeignKey(
        Doctor, on_delete=models.PROTECT, related_name='doctor_patient')
    # via doctor assign one V one to many
    volunteerp = models.ForeignKey(
        Volunteer, on_delete=models.PROTECT, default=None, null=True, blank=True)

    carername = models.CharField(max_length=25)
    carerphonenumber = models.CharField(max_length=12)
    careremail = models.EmailField()
    x_ray = models.ForeignKey(Radiology, on_delete=models.CASCADE, null=True, blank=True, default=None)
