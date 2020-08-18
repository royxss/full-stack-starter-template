from rest_framework.decorators import api_view
from rest_framework.response import Response

default_data = {
        "userId": 1,
        "id": 1,
        "name": "John Doe",
        "address": "1600 Pennsylvania Avenue NW, Washington, DC 20500"
        }

# Add API views here
@api_view(['GET'])
def getUser(request):
    if request.method == 'GET':
        response_object = [default_data]
        return Response(response_object)
