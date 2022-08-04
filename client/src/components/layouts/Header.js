import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav, Image } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { ImHome } from "react-icons/im";
import { useLogout } from "../../hooks/useLogout";
import { useLocation } from "../../hooks/useLocation";

const Header = () => {
  const { logout, user } = useLogout();
  const { location } = useLocation();
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {
    logout();
  };

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

          {location.temperature && location.weather && (
            <Nav>
              <LinkContainer to="#" variant="dark">
                <Nav.Link>
                  {location.city.length > 0 ? `${location.city} ` : ""}
                  {location.weather ? (
                    <Image src={location.weather.icon} />
                  ) : (
                    ""
                  )}{" "}
                  {Math.ceil(location.temperature.temp)}&deg;
                </Nav.Link>
              </LinkContainer>
            </Nav>
          )}

          <Nav className="mr-auto">
            {user ? (
              <>
                <LinkContainer to="/">
                  <Nav.Link onClick={handleClick}>Logout</Nav.Link>
                </LinkContainer>
              </>
            ) : (
              <>
                <LinkContainer to="/signin">
                  <Nav.Link>Login</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/signup">
                  <Nav.Link>Register</Nav.Link>
                </LinkContainer>
              </>
            )}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
