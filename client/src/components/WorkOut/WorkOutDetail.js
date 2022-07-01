import React from "react";
import { Card, Col } from "react-bootstrap";

const WorkOutDetail = ({ workout }) => {
  return (
    <Col>
      <Card>
        <Card.Body>
          <Card.Title>{workout.title}</Card.Title>
          <Card.Text>
            <p>
              <strong>Load (kg): </strong>
              {workout.load}
            </p>
            <p>
              <strong>Reps: </strong>
              {workout.reps}
            </p>
            <p>{workout.createdAt}</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default WorkOutDetail;
