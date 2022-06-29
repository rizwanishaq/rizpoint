import React, { useState } from "react";
import Chart from "react-apexcharts";
import { Button } from "react-bootstrap";

const ApexChart = () => {
  const [data, setData] = useState({
    options: {
      chart: {
        background: "#f4f4f4",
        foreColor: "#333",
      },
      xaxis: {
        categories: [
          "New York",
          "Los Angeles",
          "Chicago",
          "Houston",
          "Philadelphia",
          "Phoenix",
          "San Antonio",
          "San Diego",
          "Dallas",
          "San Jose",
        ],
      },
      plotOptions: {
        bar: {
          horizontal: false,
        },
      },
      fill: {
        colors: ["#F44336"],
      },
      dataLabels: {
        enabled: false,
      },

      title: {
        text: "Largest US Cities By Population",
        align: "center",
        margin: 20,
        offsetY: 20,
        style: {
          fontSize: "25px",
        },
      },
    },
    series: [
      {
        name: "Population",
        data: [
          8550405, 3971883, 2720546, 2296224, 1567442, 1563025, 1469845,
          1394928, 1300092, 1026908,
        ],
      },
    ],
  });

  const handleClick = () => {
    setData({
      ...data,
      options: {
        ...data.options,
        plotOptions: {
          ...data.options.plotOptions,
          bar: {
            ...data.options.plotOptions.bar,
            horizontal: !data.options.plotOptions.bar.horizontal,
          },
        },
      },
    });
  };

  return (
    <>
      <Chart
        options={data.options}
        series={data.series}
        type="bar"
        height="450"
        width="100%"
      />
      <Button variant="dark" onClick={handleClick}>
        Horizontal
      </Button>
    </>
  );
};

export default ApexChart;
