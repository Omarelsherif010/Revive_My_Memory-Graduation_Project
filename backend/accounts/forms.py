from django.contrib.auth.forms import UserChangeForm, UserCreationForm
from .models import Profile


class SignUpForm(UserCreationForm):
    class Meta:
        model = Profile
        fields = UserCreationForm.Meta.fields + (
            'name',
            'email',
            'type',
            'profilePic',
            'birthdate',
        )


class EditForm(UserChangeForm):
    class Meta:
        model = Profile
        fields = UserChangeForm.Meta.fields
