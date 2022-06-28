import React from "react";
import { Link } from "react-router-dom";
import { Container, Card, Button } from "react-bootstrap";

const Home = () => {
  return (
    <Container>
      <Card className="text-center">
        <Card.Body>
          <Card.Title>D3 Scatter plot Example</Card.Title>
          <Card.Text>
            This Example just show how to create a scatter plot in D3
          </Card.Text>
          <Link to="/piechart">
            <Button variant="dark">Go to Page</Button>
          </Link>
        </Card.Body>
      </Card>

      <Card className="text-center">
        <Card.Body>
          <Card.Title>Visx bar plot</Card.Title>
          <Card.Text>This Example just show how we can use Visx</Card.Text>
          <Link to="/simple">
            <Button variant="dark">Go to Page</Button>
          </Link>
        </Card.Body>
      </Card>

      <Card className="text-center">
        <Card.Body>
          <Card.Title>Visx PieChart</Card.Title>
          <Card.Text>PieChart example from VisX</Card.Text>
          <Link to="/pies">
            <Button variant="dark">Go to Page</Button>
          </Link>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Home;
