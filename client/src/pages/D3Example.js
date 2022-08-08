import React, { useRef, useEffect, useState } from "react";
import * as d3 from "d3";
import Container from "react-bootstrap/Container";

// Ref: https://wattenberger.com/blog/react-and-d3

const D3Example = () => {
  const ref = useRef();

  useEffect(() => {
    const xScale = d3.scaleLinear().domain([0, 100]).range([10, 290]);

    const svgElement = d3.select(ref.current);
    const axisGenerator = d3.axisBottom(xScale);

    svgElement.append("g").call(axisGenerator);
  }, []);

  return (
    <Container>
      <svg ref={ref} />
    </Container>
  );
};

export default D3Example;
