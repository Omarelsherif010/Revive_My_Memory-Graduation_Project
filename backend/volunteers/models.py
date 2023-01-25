from django.db import models
from accounts.models import Profile
from doctors.models import Doctor


class Volunteer(Profile, models.Model):
    doctorv = models.ForeignKey(
        Doctor, on_delete=models.PROTECT, related_name='volunteer_doctors')
    