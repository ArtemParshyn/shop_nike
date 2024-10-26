from django.db import models


class Shoes(models.Model):
    image = models.ImageField(upload_to='images/%Y/%m/%d/items')
    name = models.CharField(max_length=64)
    category = models.CharField(max_length=64)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    discount = models.IntegerField(default=0, blank=True)  # Заменил default на число
    material = models.CharField(max_length=64, blank=True, default="")  # Пустая строка по умолчанию
    lining = models.CharField(max_length=64, blank=True, default="")  # Пустая строка по умолчанию
    insole = models.CharField(max_length=64, blank=True, default="")  # Пустая строка по умолчанию
    sole = models.CharField(max_length=64, blank=True, default="")  # Пустая строка по умолчанию

    def __str__(self):
        return self.name
