from rest_framework.decorators import api_view
from rest_framework.response import Response

import ast
file_path = "backend/storage/data-files/data-backend.json"

with open(file_path) as f:
    default_data = ast.literal_eval(f.read())

# Add API views here
@api_view(['GET'])
def getUser(request):
    if request.method == 'GET':
        return Response(default_data)
