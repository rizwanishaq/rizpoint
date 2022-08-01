import React from "react";
import { useForm } from "react-hook-form";
import { Container, Form, Button } from "react-bootstrap";
import { useLogin } from "../hooks/useLogin";

const SignIn = () => {
  const { login, error, isLoading } = useLogin();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    await login(data.email, data.password);
    reset();
  };

  return (
    <Container className="mb-3 ">
      <Form onSubmit={handleSubmit(onSubmit)} className="mt-3">
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            {...register("email", { required: true })}
            placeholder="Enter email ...."
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            {...register("password", { required: true })}
          />
        </Form.Group>
        <Button variant="dark" type="submit" disabled={isLoading}>
          Signin
        </Button>
        {error && <p className="text-danger">{error}</p>}
      </Form>
    </Container>
  );
};

export default SignIn;
