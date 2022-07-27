import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";

const BlogLink = ({ title, text, link }) => {
  return (
    <ListGroup.Item>
      <Link to={link}>{text}</Link>
    </ListGroup.Item>
  );
};

export default BlogLink;
