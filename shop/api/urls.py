from django.urls import path

from api import views
import math

urlpatterns = [
    path('', views.index),
    path('items/<item_id>/', views.item_detail, name='item_detail'),
    path('bag', views.bag),
]
