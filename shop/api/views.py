import random

from django.shortcuts import render

from .models import Shoes


# Create your views here.

def index(request):
    items = []
    for i in Shoes.objects.all():
        items.append(
            {'name': i.name,
             'category': i.category,
             'discount': i.discount,
             'price': i.price,
             'new_price': round(i.price - (i.price / 100 * i.discount), 2),
             'image': i.image.url}
        )
    return render(request, 'main.html', context={'items': items})


def bag(request):
    return render(request, 'Your bag.html')


def item_detail(request, item_id):
    count = Shoes.objects.all().count() - 4
    count2 = Shoes.objects.all().filter(category=Shoes.objects.get(name=item_id).category).count() - 4
    a = random.randint(0, count)
    a2 = random.randint(0, count2)

    items = []
    for i in Shoes.objects.all()[a:a + 4]:
        items.append(
            {'name': i.name,
             'category': i.category,
             'discount': i.discount,
             'price': i.price,
             'new_price': round(i.price - (i.price / 100 * i.discount), 2),
             'image': i.image.url}
        )

    items_2 = []
    for i in Shoes.objects.all()[a2:a2 + 4]:
        items_2.append(
            {'name': i.name,
             'category': i.category,
             'discount': i.discount,
             'price': i.price,
             'new_price': round(i.price - (i.price / 100 * i.discount), 2),
             'image': i.image.url}
        )
    object = Shoes.objects.get(name=item_id)
    return render(request, 'item.html', context={'item': object,
                                                 'item_new_price': round(object.price - (object.price / 100 * object.discount), 2),
                                                 'items': items,
                                                 'items_2': items_2,
                                                 })
