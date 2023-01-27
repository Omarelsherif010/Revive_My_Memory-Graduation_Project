from django.contrib import admin
from .models import Patient, Radiology


admin.site.register(Patient)
admin.site.register(Radiology)
