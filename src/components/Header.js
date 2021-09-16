import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
// import NavDropdown from "react-bootstrap/NavDropdown"

function Header() {
  return (
    <Navbar bg="success">
      <Container className="me-0">
        <Navbar.Brand href="/" style={{ marginLeft: "-5%" }}>
        <h1 className="fs-1 mt-3 mb-1 text-black">
          Tyler
          <span className="text-white"> Davis</span>
        </h1>
        <div className="mb-4 ms-3 text-black">
          Charlotte, NC 28216
        </div>
        </Navbar.Brand>
        {/* <a className="navbar-brand js-scroll-trigger" href="#page-top">
          <span className="d-block d-lg-none">Tyler Davis</span>
          <span className="d-none d-lg-block"
            ><img
              className="img-fluid rounded-circle mx-auto mb-5"
              src="assets/img/Pictureofme.jpg"
              alt="me wearing a bowtie and suspenders"
          /></span>
        </a> */}
        {/* <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button> */}

        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
          <Nav className="justify-content-end fs-4" width={18}>
            <Nav.Link className="me-2" href="/about">About</Nav.Link>
            <Nav.Link className="me-5" href="/portfolio">Projects</Nav.Link>
            <Nav.Link
            className="ms-5"
              href="https://drive.google.com/file/d/1PbNHkxQcckvl6Gboy-FxdFcFCCXEKAxU/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </Nav.Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown" align="end">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown> */}
          </Nav>
      </Container>
      {/* <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#portfolio"
                >Portfolio</a
              >
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#skills">Skills</a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link js-scroll-trigger"
                href="https://drive.google.com/file/d/1PbNHkxQcckvl6Gboy-FxdFcFCCXEKAxU/view?usp=sharing"
                target="_blank" rel="noreferrer"
                >Resume</a
              >
            </li>
          </ul>
        </div> */}
    </Navbar>
  );
}

export default Header;
