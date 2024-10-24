from django.urls import path

from api import views

urlpatterns = [
    path('', views.index),
    path('item', views.item),
    path('bag', views.bag),
]
