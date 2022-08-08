import React from "react";
import { ListGroup, Col } from "react-bootstrap";
import BlogLink from "../Blog/BlogLink";

const ChartCard = () => {
  return (
    <Col sm={5}>
      <ListGroup>
        <BlogLink
          key={"D3 Scatter plot Example"}
          title={"D3 Scatter plot Example"}
          text={"This Example just show how to create a scatter plot in D3"}
          link={"/piechart"}
        />
        <BlogLink
          key={"Visx PieChart"}
          title={"Visx PieChart"}
          text={"PieChart example from VisX"}
          link={"/pies"}
        />

        <BlogLink
          key={"ApexChart"}
          title={"ApexChart"}
          text={"ApexChart example from ApexCharts"}
          link={"/apexchart"}
        />

        <BlogLink
          key={"ReChart"}
          title={"ReChart"}
          text={"ReChart example from ReChart"}
          link={"/rechart"}
        />

        <BlogLink
          key={"Real Time Chart"}
          title={"Real Time Chart"}
          text={"Real Time Chart example from using websocket"}
          link={"/realtimechart"}
        />

        <BlogLink
          key={"Real Time Chart with ApexChart"}
          title={"Real Time Chart with ApexChart"}
          text={"Real Time Chart example from ApexChart"}
          link={"/realtimeapexchart"}
        />

        <BlogLink
          key={"MermaidJs"}
          title={"MermaidJs"}
          text={"MermaidJs example"}
          link={"/mermaidjs"}
        />

        <BlogLink
          key={"D3Examples"}
          title={"D3Examples"}
          text={"D3 Examples"}
          link={"/d3examples"}
        />
      </ListGroup>
    </Col>
  );
};

export default ChartCard;
