import React, { useState, useEffect } from "react";
import useWebSocket from "react-use-websocket";
import Chart from "react-apexcharts";

const BinanceData = () => {
  const [series, setSeries] = useState([
    {
      data: [],
    },
  ]);
  const options = {
    chart: {
      type: "candlestick",
    },
    title: {
      text: "CandleStick Chart",
      align: "left",
    },
    xaxis: {
      type: "datetime",
    },
    yaxis: {
      tooltip: {
        enabled: true,
      },
    },
  };

  const { lastMessage } = useWebSocket(
    "wss://stream.binance.com:9443/ws/btcusdt@trade"
  );

  useEffect(() => {
    if (lastMessage !== null) {
      const response = JSON.parse(lastMessage.data);
      console.log(response);
      setSeries((prevState) => {
        return [
          {
            data: [
              ...prevState[0].data,
              {
                x: new Date(response["E"]).toLocaleString("es-ES"),
                y: +response["p"],
              },
            ],
          },
        ];
      });
    }
  }, [lastMessage]);

  return (
    <>
      <Chart options={options} series={series} type="line" width="500" />
    </>
  );
  // return (
  //   <>
  //     <div>{JSON.stringify(data)}</div>
  //     <div>e: {data["e"]}</div>
  //     <div>Date: {new Date(data["E"]).toLocaleString("es-ES")}</div>
  //     <div>price: {data["p"]}</div>
  //   </>
  // );
};

export default BinanceData;
