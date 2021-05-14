from django.shortcuts import render

def index(request):
    return render(request, 'filogenia/index.html')
