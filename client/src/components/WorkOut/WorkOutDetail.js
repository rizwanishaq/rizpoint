import React from "react";
import { Card } from "react-bootstrap";

const WorkOutDetail = ({ workout }) => {
  return (
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
  );
};

export default WorkOutDetail;
