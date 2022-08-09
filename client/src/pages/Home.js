import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import SelfDetail from "../components/Home/SelfDetail";
import HomeImage from "../components/Home/HomeImage";
import MiddleCard from "../components/Home/MiddleCard";
import MachineLearning from "../components/Home/MachineLearning";
import ReactJsCard from "../components/Home/ReactJsCard";
import ChartCard from "../components/Home/ChartCard";
// import TypeCard from "../components/Home/TypeCard";

const Home = () => {
  const [pageType, setPageType] = useState("home");

  return (
    <Container className="mt-3">
      <Row className="my-3">
        <HomeImage setPageType={setPageType} />
        {pageType === "home" && <SelfDetail />}
        {pageType === "machinelearning" && <MachineLearning />}
        {pageType === "reactjs" && <ReactJsCard />}
        {pageType === "graphanddatabase" && <ChartCard />}
      </Row>
      <Row>
        <MiddleCard />
      </Row>

      {/* <Row>
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
      </Row> */}
    </Container>
  );
};

export default Home;
