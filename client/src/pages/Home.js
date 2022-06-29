import React from "react";
import { Container } from "react-bootstrap";
import BlogCard from "../components/Blog/BlogCard";

const Home = () => {
  return (
    <Container>
      <BlogCard
        title={"D3 Scatter plot Example"}
        text={"This Example just show how to create a scatter plot in D3"}
        link={"/piechart"}
      />
      <BlogCard
        title={"Visx bar plot"}
        text={"This Example just show how we can use Visx"}
        link={"/simple"}
      />
      <BlogCard
        title={"Visx PieChart"}
        text={"PieChart example from VisX"}
        link={"/pies"}
      />
      <BlogCard
        title={"ApexChart"}
        text={"ApexChart example from ApexCharts"}
        link={"/apexchart"}
      />
    </Container>
  );
};

export default Home;
