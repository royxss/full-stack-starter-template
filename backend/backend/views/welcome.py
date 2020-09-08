# Create your views here.
from django.http import HttpResponse

def index(request):
    return HttpResponse("<h1> Welcome Home 2.0! <h1>")