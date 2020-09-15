import React from "react";
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
      label: "Dataset 2 (cubic interpolation)",
      backgroundColor: chartColors.red,
      borderColor: chartColors.blue,
      fill: false,
      lineTension: 0,
      data: [],
    },
  ],
};

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
          onRefresh: function () {
            data.datasets[0].data.push({
              x: Date.now(),
              y: Math.random() * 100,
            });
          },
          delay: 2000,
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

const RealTimeChart = () => {
  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
};

export default RealTimeChart;
