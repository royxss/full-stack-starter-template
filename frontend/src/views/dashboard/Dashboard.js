import React from "react";

import UserTable from "../../components/common/UserTable";
import EventStream from "../../components/common/EventStream";
import RealTimeChart from "../../components/common/RealTimeChart";
import { useSelector } from "react-redux";
import { CubeGrid } from "styled-loaders-react";

const Dashboard = () => {
  var pageLoad = useSelector((state) => state.pageLoading);

  return (
    <>
      {pageLoad === 1 ? (
        <CubeGrid color="#0254a1" />
      ) : (
        <>
          <UserTable />
          <RealTimeChart />
          <EventStream />
        </>
      )}
    </>
  );
};

export default Dashboard;
