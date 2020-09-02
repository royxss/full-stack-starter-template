""" //////////////////////////////////////////////////////////////////////////////////////////
                                        HTTP end points
////////////////////////////////////////////////////////////////////////////////////////// """

from rest_framework.decorators import api_view
from rest_framework.response import Response
import ast

# File Path
file_path = "backend/storage/data-files/data-backend.json"

def getData():
    with open(file_path) as f:
        default_data = ast.literal_eval(f.read())   
    return default_data     

# Add API views here
@api_view(['GET'])
def getUser(request):
    if request.method == 'GET':
        return Response(getData())
