from django.views.generic import CreateView
from django.urls import reverse_lazy
from .forms import SignUpFormDoctor, SignUpFormVolunteer, SignUpFormPatient
from .models import Profile
from doctors.models import Doctor
from patients.models import Patient
from volunteers.models import Volunteer


class DoctorSignUpView(CreateView):
    model = Doctor
    form_class = SignUpFormDoctor
    success_url = reverse_lazy('login')
    template_name = 'registration/signup.html'


class PatientSignUpView(CreateView):
    model = Patient
    form_class = SignUpFormPatient
    success_url = reverse_lazy('login')
    template_name = 'registration/signup.html'


class VolunteerSignUpView(CreateView):
    model = Volunteer
    form_class = SignUpFormVolunteer
    success_url = reverse_lazy('login')
    template_name = 'registration/signup.html'
