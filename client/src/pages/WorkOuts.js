import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import WorkOutDetail from "../components/WorkOut/WorkOutDetail";
import WorkOutForm from "../components/WorkOut/WorkOutForm";

const WorkOuts = () => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("http://localhost:5000/api/workouts/");
      const data = await response.json();

      if (response.ok) {
        setWorkouts(data);
      }
    };

    fetchWorkouts();
  }, []);
  return (
    <Container>
      {workouts &&
        workouts.map((workout) => (
          <WorkOutDetail key={workout._id} workout={workout} />
        ))}
      <WorkOutForm />
    </Container>
  );
};

export default WorkOuts;
