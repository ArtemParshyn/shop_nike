from django.db import models


# Create your models here.
class Shoes(models.Model):
    name = models.CharField(max_length=64)
    category = models.CharField(max_length=64)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    discount = models.IntegerField()
    material = models.CharField(max_length=64)
    Lining = models.CharField(max_length=64)
    Insole = models.CharField(max_length=64)
    Sole = models.CharField(max_length=64)
