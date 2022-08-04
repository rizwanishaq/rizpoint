import React from "react";
import { Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const SelfDetail = () => {
  return (
    <Col sm={5}>
      <h1 className="font-weight-light">Rizwan Ishaq</h1>
      <p className="mt-4">
        I am a fullStack Artificial Engineer(AI), working on Audio and computer
        vision tasks with tensorflow from start to production. Along with
        working on the frontend with ReactJs as have a passion for building web
        applications.
      </p>
      <Link to="/About">
        <Button variant="outline-primary">More detail</Button>
      </Link>
    </Col>
  );
};

export default SelfDetail;
