import React from "react";
import { ListGroup, Col } from "react-bootstrap";
import BlogLink from "../Blog/BlogLink";

const ReactJsCard = () => {
  return (
    <Col sm={5}>
      <ListGroup>
        <BlogLink
          key={"workout"}
          title={"Workout"}
          text={"Workout connected to backend-with mongodb"}
          link={"/workouts"}
        />
        <BlogLink
          key={"Image Preview Example"}
          title={"Image Preview Example"}
          text={"Just random task of image preview"}
          link={"/imagepreview"}
        />

        <BlogLink
          key={"Expense Tracker"}
          title={"Expense Tracker"}
          text={"Expense Tracker example"}
          link={"/expensetracker"}
        />

        <BlogLink
          key={"Covid Tracker"}
          title={"Covid Tracker"}
          text={"Covid Tracker example from CovidTracker"}
          link={"/covidtracker"}
        />

        <BlogLink
          key={"Firebase Tutorial"}
          title={"Firebase Tutorial"}
          text={"Firebase Tutorial example"}
          link={"/firebasetutorial"}
        />

        <BlogLink
          key={"Search"}
          title={"Search"}
          text={"Search Text example"}
          link={"/search"}
        />
        <BlogLink
          key={"UploadImage"}
          title={"UploadImage"}
          text={"Upload Image example"}
          link={"/uploadimage"}
        />

        <BlogLink
          key={"BinanceWebsocket"}
          title={"BinanceWebsocket"}
          text={"BinanceWebsocket example"}
          link={"/binancewebsocket"}
        />
        <BlogLink
          key={"UseWebsocket Example"}
          title={"UseWebsocket Example"}
          text={"UseWebsocket Example"}
          link={"/usewebsocketexample"}
        />
      </ListGroup>
    </Col>
  );
};

export default ReactJsCard;
