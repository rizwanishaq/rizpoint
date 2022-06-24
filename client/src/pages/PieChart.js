import React from "react";
import { Container } from "react-bootstrap";
import { generateData } from "../utils/utils";
import Pie from "../components/Pie";

const PieChart = () => {
  const data = generateData();

  return (
    <Container>
      <Pie
        data={data}
        width={200}
        height={200}
        innerRadius={60}
        outerRadius={100}
      />
    </Container>
  );
};

export default PieChart;
