import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

function Footer() {
  return (
    <Navbar bg="success">
      <Container className="justify-content-center">
        {/* <Navbar.Brand href="/" style={{ marginLeft: "5%" }}>
      <h1 className="mb-1 text-black">
        Tyler
        <span className="text-white"> Davis</span>
      </h1>
      <div className="mb-5 ms-3 text-black">
        Charlotte, NC 28216
      </div>
      </Navbar.Brand> */}
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
        <Nav className="fs-1 justify-content-center">
          <Nav.Link
            className="mx-5 px-5 text-white"
            href="https://www.linkedin.com/in/davis-tyler/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </Nav.Link>
          <Nav.Link
            className="mx-5 px-5 text-white"
            href="https://github.com/Twdavis85"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github"></i>
          </Nav.Link>
          <Nav.Link className="mx-5 px-5 text-white" href="mailto:tdnc85@yahoo.com">
            <i className="fab fa-yahoo"></i>
          </Nav.Link>
          <Nav.Link className="mx-5 px-5 text-white" href="tel:9802771457">
            <i className="fas fa-mobile-alt"></i>
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

    // <div className="fs-1 social-icon">
    //   <a
    //   className="rounded bg-secondary"
    //   style={{width: "100"}}
    // href="https://www.linkedin.com/in/davis-tyler/"
    // target="_blank"
    // rel="noreferrer"
    //   >
    //     <i className="fab fa-linkedin"></i>
    //   </a>
    //   <a
    //    style={{backgroundColor: "#495057"}}
    // href="https://github.com/Twdavis85"
    // target="_blank"
    // rel="noreferrer"
    //   >
    //     <i className="fab fa-github"></i>
    //   </a>
    //   <a  style={{backgroundColor: "#495057"}} href="mailto:tdnc85@yahoo.com">
    //     <i className="fab fa-yahoo"></i>
    //   </a>
    //   <a  style={{backgroundColor: "#495057"}} href="tel:9802771457">
    //     <i className="fas fa-mobile-alt"></i>
    //   </a>
    // </div>
  );
}

export default Footer;
