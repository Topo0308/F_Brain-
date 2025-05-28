from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from .models import Trajet
from .forms import TrajetForm

def trajets_list(request):
    trajets = Trajet.objects.all().order_by('-date')
    return render(request, 'trajets/home.html', {'trajets': trajets})

@login_required
def dashboard(request):
    trajets = Trajet.objects.filter(conducteur=request.user)
    return render(request, 'trajets/dashboard.html', {'trajets': trajets})

@login_required
def create_trajet(request):
    if request.method == 'POST':
        form = TrajetForm(request.POST)
        if form.is_valid():
            trajet = form.save(commit=False)
            trajet.conducteur = request.user
            trajet.save()
            return redirect('dashboard')
    else:
        form = TrajetForm()
    return render(request, 'trajets/create_trajet.html', {'form': form})
