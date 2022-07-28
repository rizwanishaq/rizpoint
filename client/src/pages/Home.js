import React from "react";
import { Container, ListGroup } from "react-bootstrap";
import BlogLink from "../components/Blog/BlogLink";

const Home = () => {
  return (
    <Container className="mt-3">
      <ListGroup>
        <BlogLink
          key={"workout"}
          title={"Workout"}
          text={"Workout connected to backend-with mongodb"}
          link={"/workouts"}
        />
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
          key={"Real Time Chart"}
          title={"Real Time Chart"}
          text={"Real Time Chart example from using websocket"}
          link={"/realtimechart"}
        />

        <BlogLink
          key={"Firebase Tutorial"}
          title={"Firebase Tutorial"}
          text={"Firebase Tutorial example"}
          link={"/firebasetutorial"}
        />

        <BlogLink
          key={"Real Time Chart with ApexChart"}
          title={"Real Time Chart with ApexChart"}
          text={"Real Time Chart example from ApexChart"}
          link={"/realtimeapexchart"}
        />

        <BlogLink
          key={"Voice Control System"}
          title={"Voice Control System"}
          text={"Voice Control System example"}
          link={"/voicecontrolsystem"}
        />

        <BlogLink
          key={"Speech Commands"}
          title={"Speech Commands"}
          text={"Speech Commands example"}
          link={"/speechcommand"}
        />

        <BlogLink
          key={"Pitch-Detection"}
          title={"Pitch-Detection"}
          text={"Pitch-Detection example"}
          link={"/pitchdetection"}
        />

        <BlogLink
          key={"Event-Detection"}
          title={"Event-Detection"}
          text={"Event-Detection example"}
          link={"/eventdetection"}
        />

        <BlogLink
          key={"ImageCapture Example"}
          title={"ImageCapture Example"}
          text={"Image Capture example"}
          link={"/imagecapture"}
        />

        <BlogLink
          key={"ObjectDetection"}
          title={"ObjectDetection"}
          text={"Object detection using tensorflow js"}
          link={"/objectdetection"}
        />

        <BlogLink
          key={"FaceDetection"}
          title={"FaceDetection"}
          text={"Face detection example"}
          link={"/facedetection"}
        />

        <BlogLink
          key={"MermaidJs"}
          title={"MermaidJs"}
          text={"MermaidJs example"}
          link={"/mermaidjs"}
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
      </ListGroup>
    </Container>
  );
};

export default Home;
