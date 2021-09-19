import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "./comp.css"

function Header() {
  return (
    <Navbar sticky="top" bg="success" className="justify-content-evenly flex-md-wrap flex-sm-wrap" id="nav">
      {/* <Container className="me-5 flex-md-wrap flex-sm-wrap flex-xs-wrap"> */}
        <Navbar.Brand href="/">
          <h1 className="mt-3 mb-1 text-black" id="name">
            Tyler
            <span className="text-white"> Davis</span>
          </h1>
          <div className="ms-3 text-black" id="city">
            Charlotte, NC 28216
          </div>
        </Navbar.Brand>
        <Nav className="fs-4">
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
            <Nav.Link className="me-1" href="#contact">
              Contact
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
      {/* </Container> */}
    </Navbar>
  );
}

export default Header;
