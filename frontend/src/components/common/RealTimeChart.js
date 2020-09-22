import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import "chartjs-plugin-streaming";

const data = {
  datasets: [
    {
      label: "Live Prices",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(54, 162, 235)",
      fill: false,
      lineTension: 0,
      borderDash: [8, 4],
      data: [],
    },
  ],
};

const RealTimeChart = (props) => {
  const [streamData, setstreamData] = useState([0, 60]);

  // Set plot options
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
            duration: 20000, // data in the past 20000 ms will be displayed
            refresh: 2000, // onRefresh callback will be called every 1000 ms
            delay: 100, // delay of 1000 ms, so upcoming values are known before plotting a line
            pause: false, // chart is not paused
            ttl: undefined, // data will be automatically deleted as it disappears off the chart

            onRefresh: function onRefresh(chart) {
              var newdata = {
                x: Date.now(),
                y: streamData[1],
              };

              chart.config.data.datasets.forEach(function (dataset) {
                dataset.data.push(newdata);
              });
              //console.log(data.datasets[0].data);
            },
          },
        },
      ],
      yAxes: [
        {
          type: "linear",
          display: true,
          scaleLabel: {
            display: true,
            labelString: "Prices",
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

  useEffect(() => {
    setstreamData(props.xData);
  }, [props]);

  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
};

export default RealTimeChart;
