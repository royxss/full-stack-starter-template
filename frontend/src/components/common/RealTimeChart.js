import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import "chartjs-plugin-streaming";

var chartColors = {
  red: "rgb(255, 99, 132)",
  orange: "rgb(255, 159, 64)",
  yellow: "rgb(255, 205, 86)",
  green: "rgb(75, 192, 192)",
  blue: "rgb(54, 162, 235)",
  purple: "rgb(153, 102, 255)",
  grey: "rgb(201, 203, 207)",
};

const data = {
  datasets: [
    {
      label: "Live Prices",
      backgroundColor: chartColors.red,
      borderColor: chartColors.blue,
      fill: false,
      lineTension: 0,
      data: [],
    },
  ],
};

function onRefresh(xData, yData) {
  data.datasets.forEach(function (dataset) {
    dataset.data.push({
      x: xData,
      y: yData,
    });
  });
}

function setOptions(xData, yData) {
  //console.log(xData + "...." + yData);
  const options = {
    title: {
      display: true,
      text: "Line chart - Stock Prices",
    },
    scales: {
      xAxes: [
        {
          type: "realtime",
          realtime: {
            duration: 20000,
            refresh: 1000,
            delay: 2000,
            onRefresh: onRefresh(xData, yData),
          },
        },
      ],
      yAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: "value",
          },
        },
      ],
    },
    tooltips: {
      mode: "nearest",
      intersect: false,
    },
    hover: {
      mode: "nearest",
      intersect: false,
    },
  };
  console.log(data.datasets[0].data);
  return options;
}

const RealTimeChart = (props) => {
  const [xData, setXData] = useState([0, 50]);
  //const [yData, setYData] = useState(0);
  let options = {};

  useEffect(() => {
    setXData(props.xData);
    //setYData(props.yData);
    options = setOptions(xData[0], xData[1]);
  }, [props]);

  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
};

export default RealTimeChart;
