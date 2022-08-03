import React from "react";
import {
  Container,
  Navbar,
  NavDropdown,
  Nav,
  Row,
  Col,
  Image,
  Button,
  Card,
} from "react-bootstrap";

const SimpleBootStrapExample = () => {
  return (
    <Container className="mt-2 fluid" style={{ border: "solid #cecece" }}>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <main>
        <Container>
          <Row className="px-5 my-3">
            <Col sm={7}>
              <Image
                src={"https://picsum.photos/900/400"}
                fluid
                rounded
                className=""
              />
            </Col>
            <Col sm={5}>
              <h1 className="font-weight-light">Tagline</h1>
              <p className="mt-4">
                This is a template that is great for small business. It does not
                have too much fancy flare to it, but it makes a great use of the
                standard Bootstrap core components. Feel free to use this
                template for any project you want!.
              </p>
              <Button variant="outline-primary">Call to action</Button>
            </Col>
          </Row>

          <Row>
            <Card className="text-center bg-secondary text-white my-5 py-4">
              <Card.Body>
                This call to action card is a great place to showcase some
                important information or display a clever tagline!
              </Card.Body>
            </Card>
          </Row>
          <Row>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="https://picsum.photos/320/200" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://picsum.photos/id/200/320/200"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://picsum.photos/id/400/320/200"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </main>
      <footer className="py-2 my-2 bg-dark">
        <Container className="px-4">
          <p className="text-center text-white">
            Copyright &copy; Your Website 2021
          </p>
        </Container>
      </footer>
    </Container>
  );
};

export default SimpleBootStrapExample;
