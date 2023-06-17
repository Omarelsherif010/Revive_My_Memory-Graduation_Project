# urls.py
from django.urls import path
from .views import PredictionView

urlpatterns = [
    path('api/predict/', PredictionView.as_view(), name='predict'),
]