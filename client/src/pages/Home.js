import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import SelfDetail from "../components/Home/SelfDetail";
import HomeImage from "../components/Home/HomeImage";
import MiddleCard from "../components/Home/MiddleCard";
import MachineLearning from "../components/Home/MachineLearning";
import ReactJsCard from "../components/Home/ReactJsCard";
import ChartCard from "../components/Home/ChartCard";
import TypeCard from "../components/Home/TypeCard";

const Home = () => {
  const [pageType, setPageType] = useState("home");
  const homeimageUrl = {
    home: "https://picsum.photos/900/400",
    machinelearning:
      "https://images.unsplash.com/photo-1591453089816-0fbb971b454c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    reactjs:
      "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    graphanddatabase:
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80",
  };

  return (
    <Container className="mt-3">
      <Row className="my-3">
        <HomeImage />
        {pageType === "home" && <SelfDetail />}
        {pageType === "machinelearning" && <MachineLearning />}
        {pageType === "reactjs" && <ReactJsCard />}
        {pageType === "graphanddatabase" && <ChartCard />}
      </Row>

      <Row>
        <Link to="#">
          <MiddleCard setPageType={setPageType} />
        </Link>
      </Row>
      <Row>
        <Col>
          <TypeCard
            title={"Machine Learning"}
            text={
              "Examples of machine learning done with reactjs and tensorflow js"
            }
            type={"machinelearning"}
            setPageType={setPageType}
            imageUrl={homeimageUrl["machinelearning"]}
          />
        </Col>
        <Col>
          <TypeCard
            title={"ReactJs"}
            text={"Simple reactjs demo, hooks and usecontext"}
            type={"reactjs"}
            setPageType={setPageType}
            imageUrl={homeimageUrl["reactjs"]}
          />
        </Col>
        <Col>
          <TypeCard
            title={"Graph & Databases"}
            text={"Graph and database demos with reactjs"}
            type={"graphanddatabase"}
            setPageType={setPageType}
            imageUrl={homeimageUrl["graphanddatabase"]}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
