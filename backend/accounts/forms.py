from django.contrib.auth.forms import UserChangeForm, UserCreationForm
from .models import Profile
from doctors.models import Doctor
from patients.models import Patient
from volunteers.models import Volunteer


# doctor forms
class SignUpFormDoctor(UserCreationForm):
    class Meta:
        model = Doctor
        fields = UserCreationForm.Meta.fields + (
            'name',
            'email',
            'usertype',
            'profilePic',
            'birthdate',
            'major'
        )


class EditFormDoctor(UserChangeForm):
    class Meta:
        model = Doctor
        fields = UserChangeForm.Meta.fields

#################################################

# patient forms 
class SignUpFormPatient(UserCreationForm):
    class Meta:
        model = Patient
        fields = UserCreationForm.Meta.fields + (
            'name',
            'email',
            'usertype',
            'profilePic',
            'birthdate',
            'doctorp',
            'carername',
            'carerphonenumber',
            'careremail',
        )


class EditFormPatient(UserChangeForm):
    class Meta:
        model = Patient
        fields = UserChangeForm.Meta.fields

####################################################
# vol forms
class SignUpFormVolunteer(UserCreationForm):
    class Meta:
        model = Volunteer
        fields = UserCreationForm.Meta.fields + (
            'name',
            'email',
            'usertype',
            'profilePic',
            'birthdate',
            'doctorv'
        )


class EditFormVolunteer(UserChangeForm):
    class Meta:
        model = Volunteer
        fields = UserChangeForm.Meta.fields