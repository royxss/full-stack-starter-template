import React from "react";

import OverallDefaultCounts from "../../components/common/OverallDefaultCounts";
import { useSelector } from "react-redux";
import { CubeGrid } from "styled-loaders-react";

//style={{display:'flex', flexDirection: 'row'}}

const Dashboard = () => {
  var initState = useSelector((state) => state.initLandDashboard);
  var pageLoad = useSelector((state) => state.pageLoading);

  if (initState === 0) {
    return (
      <>
        <OverallDefaultCounts />
      </>
    );
  } else {
    return <>{pageLoad === 1 ? <CubeGrid color="#0254a1" /> : <></>}</>;
  }
};

export default Dashboard;
