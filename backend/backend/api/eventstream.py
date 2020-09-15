""" //////////////////////////////////////////////////////////////////////////////////////////
                                    HTTP end point for event streaming
////////////////////////////////////////////////////////////////////////////////////////// """
    
import numpy as np
import time
import datetime
from django.http import StreamingHttpResponse

def stream(request):
    eos = ''
    def events():
        start = 1
        print("API event stream starting...")
        while (start <= 30):
            data = {
                "date": start,
                "price": np.random.uniform(50.9, 90.9)
            }
            time.sleep(2)
            start +=1
            
            print('The new data is: %s\n\n' % data)
            # Note: yielding `data:` is necessary to access as a frontend parameter
            yield 'data: %s\n\n' % data
    return StreamingHttpResponse(events(), content_type="text/event-stream")