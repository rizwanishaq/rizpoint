import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

const BlogCard = ({ title, text, link }) => {
  return (
    <Card className="text-center">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Link to={link}>
          <Button variant="dark">Go to Page</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default BlogCard;
