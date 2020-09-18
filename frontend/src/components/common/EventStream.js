import React, { useState, useEffect } from "react";
import { CCard, CCardBody, CCardHeader } from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { APIStream } from "../../redux/actions/actionCreator";
import RealTimeChart from "./RealTimeChart";

//const APIStream = "http://localhost:9091/api/stream/";

const EventStream = () => {
  /*   const [xdataStream, setXDataStream] = useState([]);
  const [ydataStream, setYDataStream] = useState([]); */
  const [xdataStream, setXDataStream] = useState([0, 0]);
  //const [ydataStream, setYDataStream] = useState(0);

  useEffect(() => {
    let eventSource = new EventSource(APIStream);

    eventSource.onmessage = (event) => {
      let obj = event.data;
      obj = JSON.parse([obj]);
      updateXDataStreamArray([obj.date, obj.price]);
      //updateYDataStreamArray(obj.price);
    };

    // returned function will be called on component unmount
    return () => {
      if (eventSource) eventSource.close();
    };
  }, []);

  const updateXDataStreamArray = (itm) => {
    /* setXDataStream((currentState) => [...currentState, itm]); */
    setXDataStream(itm);
  };
  const updateYDataStreamArray = (itm) => {
    /* setYDataStream((currentState) => [...currentState, itm]); */
    //setYDataStream(itm);
  };

  return (
    <CCard accentColor="dark">
      <CCardHeader>
        Event Streaming
        <div className="card-header-actions">
          <CIcon name="cil-check" className="float-right" />
        </div>
      </CCardHeader>
      <CCardBody>
        {/*xdataStream.map((itm, i) => itm + ":" + ydataStream[i] + "  -->  ")*/}
        <RealTimeChart xData={xdataStream} /*yData={ydataStream}*/ />
      </CCardBody>
    </CCard>
  );
};

export default EventStream;
