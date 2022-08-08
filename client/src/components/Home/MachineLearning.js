import React from "react";
import { ListGroup, Col } from "react-bootstrap";
import BlogLink from "../Blog/BlogLink";

const MachineLearning = () => {
  return (
    <Col sm={5}>
      <ListGroup>
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
          key={"Selfie Segmentation"}
          title={"Selfie Segmentation"}
          text={"Selfie Segmentation example"}
          link={"/selfeisegmentation"}
        />
      </ListGroup>
    </Col>
  );
};

export default MachineLearning;
