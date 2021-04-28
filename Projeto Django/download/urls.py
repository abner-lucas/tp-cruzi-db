from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='download'),
    path('sequencia', views.page_objects, name='page_objects'),
]
