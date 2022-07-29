import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import { ImHome } from "react-icons/im";

const Header = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Link to="/" style={{ color: "inherit", textDecoration: "inherit" }}>
            <Navbar.Brand>
              <ImHome /> {}
              rizpoint
            </Navbar.Brand>
          </Link>

          <Nav>
            <LinkContainer to="#" variant="dark">
              <Nav.Link>{date.toLocaleTimeString()}</Nav.Link>
            </LinkContainer>
          </Nav>

          <Nav className="mr-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/About">
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/signin">
              <Nav.Link>Login</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/signup">
              <Nav.Link>Register</Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
