import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import { useWorkoutsContext } from "../../hooks/useWorkoutsContext";
import { useAuthContext } from "../../hooks/useAuthContext";

const WorkOutForm = () => {
  const { dispatch } = useWorkoutsContext();
  const { user } = useAuthContext();

  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = async (data) => {
    const { title, load, reps } = data;

    if (!user) {
      setError("Please login to add a workout");
      return;
    }

    const response = await fetch("http://localhost:5000/api/workouts/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify({ title, load, reps }),
    });

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      toast.success("Data is added to the database");
      setError("");
      reset();
      dispatch({ type: "CREATE_WORKOUT", payload: json });
    }
  };
  if (error) {
    toast.error(error);
  }
  return (
    <Form className="mt-3" onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" {...register("title", { required: true })} />
        <Form.Text
          hidden={errors.title ? false : true}
          style={{ color: `${errors.load ? "red" : ""}` }}
        >
          you must enter a number
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Reps: </Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter number"
          {...register("reps", { required: true })}
        />
        <Form.Text
          hidden={errors.reps ? false : true}
          style={{ color: `${errors.reps ? "red" : ""}` }}
        >
          you must enter a number
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Load: </Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter number"
          {...register("load", { required: true })}
        />
        <Form.Text
          hidden={errors.load ? false : true}
          style={{ color: `${errors.load ? "red" : ""}` }}
        >
          you must enter a number
        </Form.Text>
      </Form.Group>
      <Button variant="primary" type="submit">
        Add a new workout
      </Button>
    </Form>
  );
};

export default WorkOutForm;
