""" //////////////////////////////////////////////////////////////////////////////////////////
                                    HTTP end point for event streaming
////////////////////////////////////////////////////////////////////////////////////////// """
    
import numpy as np
import time
import datetime
import json
from django.http import StreamingHttpResponse

def stream(request):
    eos = ''
    def events():
        start = 1
        print("API event stream starting...")
        while (start <= 30):
            data = {
                "date": start,
                "price": round(np.random.uniform(55.9, 60.9), 2)
            }
            data = json.dumps(data)
            time.sleep(2)
            start +=1
            
            print('The new data is: %s\n\n' % data)
            # Note: yielding `data:` is necessary to access as a frontend parameter
            yield 'data: %s\n\n' % data
    return StreamingHttpResponse(events(), content_type="text/event-stream")