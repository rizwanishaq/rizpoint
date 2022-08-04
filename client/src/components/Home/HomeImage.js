import React from "react";
import { Col, Image } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

const HomeImage = () => {
  return (
    <Col sm={7}>
      {/* <Image src={url} fluid rounded width={900} height={400} /> */}
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1591453089816-0fbb971b454c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="Machine Learning"
            width={900}
            height={400}
          />
          <Carousel.Caption>
            <h3>Machine Learning</h3>
            <p>
              Examples of machine learning done with reactjs and tensorflow js
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="Second slide"
            width={900}
            height={400}
          />

          <Carousel.Caption>
            <h3>ReactJs</h3>
            <p>Simple reactjs demo, hooks and usecontext</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80"
            alt="Third slide"
            width={900}
            height={400}
          />

          <Carousel.Caption>
            <h3>Graph & Databases</h3>
            <p>Graph and database demos with reactjs</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Col>
  );
};

export default HomeImage;
