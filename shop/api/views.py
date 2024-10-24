from django.shortcuts import render


# Create your views here.

def index(request):
    return render(request, 'main.html')


def bag(request):
    return render(request, 'Your bag.html')


def item(request):
    return render(request, 'item.html')
