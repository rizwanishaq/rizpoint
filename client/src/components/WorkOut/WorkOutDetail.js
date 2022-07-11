import React from "react";
import { Card } from "react-bootstrap";
import { toast } from "react-toastify";
import { useWorkoutsContext } from "../../hooks/useWorkoutsContext";
import { AiFillDelete } from "react-icons/ai";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

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
    <Card border="success" className="text-center mb-3">
      <Card.Body>
        <Card.Header>{workout.title}</Card.Header>
        <Card.Text>
          <p>
            <strong>Load (kg): </strong>
            {workout.load}
          </p>
          <p>
            <strong>Reps: </strong>
            {workout.reps}
          </p>
          <AiFillDelete onClick={handleClick} />
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">
        {formatDistanceToNow(new Date(workout.createdAt), {
          addSuffix: true,
        })}
      </Card.Footer>
    </Card>
  );
};

export default WorkOutDetail;
