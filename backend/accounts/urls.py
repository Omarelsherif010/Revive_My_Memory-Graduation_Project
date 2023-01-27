from django.urls import path
from .views import DoctorSignUpView, VolunteerSignUpView, PatientSignUpView

app_name = 'accounts'

urlpatterns = [
    path('signup/doctor/', DoctorSignUpView.as_view(), name='signupdoctor'),
    path('signup/patient/', PatientSignUpView.as_view(), name='signuppatient'),
    path('signup/volunteer/', VolunteerSignUpView.as_view(), name='signupvolunteer'),
]
