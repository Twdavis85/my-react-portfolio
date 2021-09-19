import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import "./comp.css"

function Footer() {
  return (
    <Navbar id="contact" bg="success">
      <Container id="links" className="justify-content-end me-5">
        <Nav style={{ fontSize: "300%" }}>
          <Nav.Link
            className="mx-3"
            href="https://www.linkedin.com/in/davis-tyler/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </Nav.Link>
          <Nav.Link
            className="mx-3"
            href="https://github.com/Twdavis85"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github"></i>
          </Nav.Link>
          <Nav.Link className="mx-3" href="mailto:tdnc85@yahoo.com">
            <i className="fab fa-yahoo"></i>
          </Nav.Link>
          <Nav.Link className="ms-3" href="tel:9802771457">
            <i className="fas fa-mobile-alt"></i>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Footer;
