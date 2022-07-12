import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import { BarChart, Bar } from "recharts";

const RealTimeChart = () => {
  const socket = io("http://localhost:5000", {
    transports: ["websocket", "polling"],
  });

  const [data, setData] = useState([]);

  useEffect(() => {
    socket.on("cpu", (cpuPercent) => {
      setData((prevState) => [...prevState, cpuPercent]);
    });
  }, []);

  return (
    <>
      <BarChart width={500} height={400} data={data}>
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
    </>
  );
};

export default RealTimeChart;
