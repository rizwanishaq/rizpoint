import React from "react";
import { Link } from "react-router-dom";
import { Container, Card, Button } from "react-bootstrap";

const Home = () => {
  return (
    <Container>
      <Card className="text-center">
        <Card.Body>
          <Card.Title>D3 PieChart Example</Card.Title>
          <Card.Text>
            This Example just show how the pieChart works in D3
          </Card.Text>
          <Link to="/piechart">
            <Button variant="dark">Go to Page</Button>
          </Link>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Home;
