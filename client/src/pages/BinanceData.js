import React, { useState, useEffect } from "react";
import useWebSocket from "react-use-websocket";

const BinanceData = () => {
  const [data, setData] = useState({});
  const { lastMessage } = useWebSocket(
    "wss://stream.binance.com:9443/ws/btcusdt@kline_1m"
  );

  useEffect(() => {
    if (lastMessage !== null) {
      setData(JSON.parse(lastMessage.data));
    }
  }, [lastMessage]);

  return (
    <>
      <div>{JSON.stringify(data)}</div>
      <div>e: {data["e"]}</div>
      <div>E: {data["E"]}</div>
      <div>s: {data["s"]}</div>
      <div>k: {JSON.stringify(data["k"])}</div>
    </>
  );
};

export default BinanceData;
