import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

function Footer() {
  return (
    <Navbar bg="success">
      <Container className="justify-content-end me-5">
        <Nav className="fs-1">
          <Nav.Link
            className="mx-5"
            href="https://www.linkedin.com/in/davis-tyler/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </Nav.Link>
          <Nav.Link
            className="mx-5"
            href="https://github.com/Twdavis85"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github"></i>
          </Nav.Link>
          <Nav.Link
            className="mx-5"
            href="mailto:tdnc85@yahoo.com"
          >
            <i className="fab fa-yahoo"></i>
          </Nav.Link>
          <Nav.Link className="ms-5" href="tel:9802771457">
            <i className="fas fa-mobile-alt"></i>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Footer;
