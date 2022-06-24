import React from "react";
import { Col, Row, ListGroup, Container } from "react-bootstrap";
import Badge from "react-bootstrap/Badge";
import PieChart from "./PieChart";

const Personal = () => {
  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <Container>
            <h1>
              <Badge pill bg="dark">
                Experience
              </Badge>
            </h1>
            <ListGroup>
              <ListGroup.Item>Research and Development Engineer</ListGroup.Item>
              <ListGroup.Item>Researcher</ListGroup.Item>
              <ListGroup.Item>Visiting Researcher</ListGroup.Item>
              <ListGroup.Item>Researcher</ListGroup.Item>
              <ListGroup.Item>Visiting Instructor</ListGroup.Item>
              <ListGroup.Item>Research student</ListGroup.Item>
              <ListGroup.Item>Student Internee</ListGroup.Item>
            </ListGroup>
          </Container>
        </Col>
        <Col>
          <Container>
            <h1>
              <Badge pill bg="dark">
                Education
              </Badge>
            </h1>
            <ListGroup as="ul">
              <ListGroup.Item as="li">
                PhD - Computer and Telecommunication Engineering.
              </ListGroup.Item>
              <ListGroup.Item as="li">
                Master of Science, Electrical Engineering.
              </ListGroup.Item>
              <ListGroup.Item as="li">
                Bachelor of Science, Computer Engineering.
              </ListGroup.Item>
            </ListGroup>
          </Container>
          <Row>
            <Col>
              <Container>
                <PieChart />
              </Container>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Personal;
