from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from .forms import SignUpFormDoctor, EditFormDoctor
from .models import Profile


class CAdmin(UserAdmin):
    add_form = SignUpFormDoctor
    form = EditFormDoctor
    model = Profile
    list_display = [
        'username',
        'email',
        'is_staff',
    ]

    fieldsets = UserAdmin.fieldsets + \
        ((None, {'fields': ('profilePic', 'birthdate',)}),)
    add_fieldsets = UserAdmin.add_fieldsets + \
        ((None, {'fields': ('profilePic', 'birthdate',)}),)


admin.site.register(Profile, CAdmin)
