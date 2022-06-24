import React, { useState, useEffect } from "react";
import { csv, arc, pie } from "d3";
import { Container } from "react-bootstrap";

const width = 960;
const height = 500;
const centerX = width / 2;
const centerY = height / 2;

const ReadCsv = () => {
  const [data, setData] = useState(null);

  const pieArc = arc()
    .innerRadius(0)
    .outerRadius(width);

  useEffect(() => {
    csv(
      "https://gist.githubusercontent.com/curran/b236990081a24761f7000567094914e0/raw/cssNamedColors.csv"
    ).then(setData);
  }, []);

  if (!data) {
    return <pre>'Loading ...'</pre>;
  }

  return (
    <Container>
      <svg width={width} height={height} xs={6}>
        <g transform={`translate(${centerX}, ${centerY})`}>
          {pie()
            .value(1)(data)
            .map((d, i) => (
              <path fill={d.data["RGB hex value"]} d={pieArc(d)} key={i} />
            ))}
        </g>
      </svg>
    </Container>
  );
};

export default ReadCsv;
