import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";

const BlogLink = ({ title, text, link }) => {
  return (
    <ListGroup.Item style={{ border: "none" }}>
      <Link to={link} style={{ textDecoration: "none" }}>
        {" "}
        {text}
      </Link>
    </ListGroup.Item>
  );
};

export default BlogLink;
