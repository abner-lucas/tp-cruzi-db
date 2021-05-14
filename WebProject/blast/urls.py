from django.urls import path
from . import views
from .out import Blast

urlpatterns = [
    path('', views.index, name='blast'),
    path('getresponse', views.GetResponse, name='getresponse'),
]