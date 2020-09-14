import React, { useState, useEffect } from "react";

const EventStream = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    let eventSource = new EventSource("/api/stream/");
    eventSource.onmessage = (e) => updateList(JSON.parse(e.data));
  }, []);

  const updateList = (itm) => {
    setData([...itm]);
  };

  return <>{data.map((p) => p)}</>;
};

export default EventStream;
