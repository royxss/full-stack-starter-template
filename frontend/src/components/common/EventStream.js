import React, { useState, useEffect } from "react";
import { CCard, CCardBody, CCardHeader } from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { APIStream } from "../../redux/actions/actionCreator";
import RealTimeChart from "./RealTimeChart";

//const APIStream = "http://localhost:9091/api/stream/";

const EventStream = () => {
  const [dataStream, setDataStream] = useState([0, 60]);

  useEffect(() => {
    let eventSource = new EventSource(APIStream);

    eventSource.onmessage = (event) => {
      let obj = event.data;
      obj = JSON.parse([obj]);
      updateDataStreamArray([obj.date, obj.price]);
    };

    // returned function will be called on component unmount
    return () => {
      if (eventSource) eventSource.close();
    };
  }, []);

  const updateDataStreamArray = (itm) => {
    /* setXDataStream((currentState) => [...currentState, itm]); */
    setDataStream(itm);
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
        <RealTimeChart xData={dataStream} />
      </CCardBody>
    </CCard>
  );
};

export default EventStream;
