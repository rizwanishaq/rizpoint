import React, { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import WorkOutDetail from "../components/WorkOut/WorkOutDetail";
import WorkOutForm from "../components/WorkOut/WorkOutForm";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

const WorkOuts = () => {
  const { workouts, dispatch } = useWorkoutsContext();

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("http://localhost:5000/api/workouts/");
      const data = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_WORKOUTS", payload: data });
      }
    };

    fetchWorkouts();
  }, [dispatch]);
  return (
    <Container>
      <Row>
        {workouts &&
          workouts.map((workout) => (
            <WorkOutDetail key={workout._id} workout={workout} />
          ))}
      </Row>
      <Row>
        <WorkOutForm />
      </Row>
    </Container>
  );
};

export default WorkOuts;
