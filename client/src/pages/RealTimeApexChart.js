import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import Chart from "react-apexcharts";

const RealTimeApexChart = () => {
  const socket = io("http://localhost:5000", {
    transports: ["websocket", "polling"],
  });

  const [series, setSeries] = useState([
    {
      name: "cpuTick",
      data: [],
    },
  ]);
  const options = {
    chart: {
      id: "basic-bar",
    },
    responsive: [
      {
        breakpoint: 1000,
        options: {
          plotOptions: {
            bar: {
              horizontal: false,
            },
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  useEffect(() => {
    socket.on("cpu", (cpuPercent) => {
      setSeries((prevState) => {
        console.log(prevState[0]);

        return [
          {
            ...prevState[0],
            data: [...prevState[0].data, cpuPercent.value],
          },
        ];
      });
    });
    return () => {
      console.log("socket is going to close");
      socket.close();
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Chart options={options} series={series} type="line" width="500" />
    </>
  );
};

export default RealTimeApexChart;
