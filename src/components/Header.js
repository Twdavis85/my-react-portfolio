import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

function Header() {
  return (
    <Navbar bg="success">
      <Container className="me-5 align-items-bottom">
        <Navbar.Brand href="/" style={{marginLeft: "-25%" }}>
          <h1 className="mt-3 mb-1 text-black" style={{fontSize: "500%"}}>
            Tyler
            <span className="text-white"> Davis</span>
          </h1>
          <div className="mb-4 ms-3 text-black" style={{fontSize: "200%"}}>Charlotte, NC 28216</div>
        </Navbar.Brand>
        <Nav className="fs-3 justify-content-end">
          <Nav.Item>
          <Nav.Link className="me-2" href="/about">
            About
          </Nav.Link>
          </Nav.Item>
          <Nav.Item>
          <Nav.Link className="me-1" href="/portfolio">
            Projects
          </Nav.Link>
          </Nav.Item>
          <Nav.Item>
          <Nav.Link
            className="ms-1"
            href="https://drive.google.com/file/d/1PbNHkxQcckvl6Gboy-FxdFcFCCXEKAxU/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
