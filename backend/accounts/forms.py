from django.contrib.auth.forms import UserChangeForm, UserCreationForm
from .models import Profile
from doctors.models import Doctor


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


