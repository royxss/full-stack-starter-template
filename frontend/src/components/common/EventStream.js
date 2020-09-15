import React, { useState, useEffect } from "react";
import { CCard, CCardBody, CCardHeader } from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { APIStream } from "../../redux/actions/actionCreator";

//const APIStream = "/api/stream/";

const EventStream = () => {
  const [dataStream, setDataStream] = useState([]);

  useEffect(() => {
    let eventSource = new EventSource(APIStream);

    eventSource.onmessage = (event) => updateDataStreamArray(event.data);

    // returned function will be called on component unmount
    return () => {
      if (eventSource) eventSource.close();
    };
  }, []);

  const updateDataStreamArray = (itm) => {
    setDataStream((currentState) => [...currentState, itm]);
  };

  return (
    <CCard accentColor="dark">
      <CCardHeader>
        Event Streaming
        <div className="card-header-actions">
          <CIcon name="cil-check" className="float-right" />
        </div>
      </CCardHeader>
      <CCardBody>{dataStream.map((itm) => itm)}</CCardBody>
    </CCard>
  );
};

export default EventStream;
