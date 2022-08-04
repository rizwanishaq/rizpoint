import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import WorkOutDetail from "../components/WorkOut/WorkOutDetail";
import WorkOutForm from "../components/WorkOut/WorkOutForm";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import { useAuthContext } from "../hooks/useAuthContext";

const WorkOuts = () => {
  const { workouts, dispatch } = useWorkoutsContext();
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("http://localhost:5000/api/workouts/", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      const data = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_WORKOUTS", payload: data });
      }
    };
    if (user) {
      fetchWorkouts();
    }
  }, [dispatch, user]);
  return (
    <Container>
      <Row>
        <Col>
          <WorkOutForm />
        </Col>
        <Col>
          {workouts &&
            workouts.map((workout) => (
              <WorkOutDetail key={workout._id} workout={workout} />
            ))}
        </Col>
      </Row>
    </Container>
  );
};

export default WorkOuts;
