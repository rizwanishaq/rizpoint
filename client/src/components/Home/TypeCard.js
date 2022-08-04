import React from "react";
import { Card, Button } from "react-bootstrap";

const TypeCard = ({ title, text, type, setPageType, imageUrl }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={imageUrl} width={286} height={179} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Button
          variant="primary"
          onClick={() => {
            setPageType(type);
          }}
        >
          Demos
        </Button>
      </Card.Body>
    </Card>
  );
};

export default TypeCard;
