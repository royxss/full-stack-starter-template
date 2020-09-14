""" //////////////////////////////////////////////////////////////////////////////////////////
                                        HTTP end points
////////////////////////////////////////////////////////////////////////////////////////// """
    
import numpy as np
import time
import datetime
from django.http import StreamingHttpResponse

def stream(request):
    def events():
        start = 1
        while (start < 10):
            data = {
                "date": start,
                "price": np.random.uniform(50.9, 90.9)
            }
            time.sleep(2)
            start +=1
            
            print('The new coordinate is: %s\n\n' % data)
            yield data
    return StreamingHttpResponse(events(), content_type="text/event-stream") 
   

