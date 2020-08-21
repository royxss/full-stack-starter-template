from rest_framework.decorators import api_view
from rest_framework.response import Response
from ../storage/data-files import data-backend.json

default_data = data-backend.json

# Add API views here
@api_view(['GET'])
def getUser(request):
    if request.method == 'GET':
        return Response(default_data)
