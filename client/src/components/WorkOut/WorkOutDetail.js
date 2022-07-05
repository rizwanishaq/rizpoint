import React from "react";
import { Card, Col } from "react-bootstrap";
import { toast } from "react-toastify";
import { useWorkoutsContext } from "../../hooks/useWorkoutsContext";
import { AiFillDelete } from "react-icons/ai";

const WorkOutDetail = ({ workout }) => {
  const { dispatch } = useWorkoutsContext();

  const handleClick = async () => {
    const response = await fetch(
      `http://localhost:5000/api/workouts/${workout._id}`,
      {
        method: "DELETE",
      }
    );

    const json = await response.json();

    if (response.ok) {
      toast.success("Data is deleted from the database");
      dispatch({ type: "DELETE_WORKOUT", payload: json });
    } else {
      toast.error("Data is not deleted from the database");
    }
  };

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
            <AiFillDelete onClick={handleClick} />
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default WorkOutDetail;
