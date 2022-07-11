import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlogCard from "../components/Blog/BlogCard";

const Home = () => {
  return (
    <Container className="mt-3">
      <Row>
        <Col>
          <BlogCard
            title={"Workout"}
            text={"Workout connected to backend-with mongodb"}
            link={"/workouts"}
          />
        </Col>
        <Col>
          <BlogCard
            title={"D3 Scatter plot Example"}
            text={"This Example just show how to create a scatter plot in D3"}
            link={"/piechart"}
          />
        </Col>
        <Col>
          <BlogCard
            title={"Visx PieChart"}
            text={"PieChart example from VisX"}
            link={"/pies"}
          />
        </Col>
        <Col>
          <BlogCard
            title={"ApexChart"}
            text={"ApexChart example from ApexCharts"}
            link={"/apexchart"}
          />
        </Col>
        <Col>
          <BlogCard
            title={"ReChart"}
            text={"ReChart example from ReChart"}
            link={"/rechart"}
          />
        </Col>
        <Col>
          <BlogCard
            title={"Image Preview Example"}
            text={"Just random task of image preview"}
            link={"/imagepreview"}
          />
        </Col>

        <Col>
          <BlogCard
            title={"Expense Tracker"}
            text={"Expense Tracker example"}
            link={"/expensetracker"}
          />
        </Col>

        <Col>
          <BlogCard
            title={"Covid Tracker"}
            text={"Covid Tracker example from CovidTracker"}
            link={"/covidtracker"}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
