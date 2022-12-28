from django.urls import path
from .views import LobbyView, RoomView
from . import views
urlpatterns = [
    path('', LobbyView.as_view(), name='lobby'),
    path('room/', RoomView.as_view(), name='room'),
    path('get_token/', views.getToken),

    path('create_member/', views.createMember),
    path('get_member/', views.getMember),
    path('delete_member/', views.deleteMember),
]