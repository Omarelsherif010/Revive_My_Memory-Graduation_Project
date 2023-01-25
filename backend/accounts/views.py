from django.views.generic import CreateView
from django.urls import reverse_lazy
from .forms import SignUpFormDoctor
from .models import Profile
from doctors.models import Doctor



class SignUpView(CreateView):
    model = Doctor
    form_class = SignUpFormDoctor
    success_url = reverse_lazy('login')
    template_name = 'registration/signup.html'