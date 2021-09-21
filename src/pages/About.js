import React from "react";

function About() {
  return (
    <div className="bg-secondary">
      <div>
        <span className="d-none2 d-lg-block">
          <img
            className="img-profile rounded-circle ms-5 mb-1 mt-2"
            src="https://bestteamproj2.s3.amazonaws.com/images/Pictureofme.jpg"
            alt="me wearing a bowtie and suspenders"
          />
        </span>
        <h2 className="my-5 px-4 mx-4 text-white">
          I am a Full Stack Web Developer with a background in customer service
          and warehousing that can bring a unique perspective to web development
          and user interaction. I earned a certificate in Full Stack Web
          Development from the UNC Charlotte Coding Boot Camp. Below you will
          see links to a few of my projects as well as my GitHub and LinkedIn
          accounts.
        </h2>
      </div>
      <div className="text-white">
        <div className="mb-3 fs-2 ms-5 text-black">
          Programming Languages & Tools
        </div>
        <ul
          style={{ fontSize: "350%" }}
          className="my-5 ps-5 mx-5 pe-5 text-white"
        >
          <li className="list-inline-item me-4">
            <i className="fab fa-html5"></i>
          </li>
          <li className="list-inline-item me-4">
            <i className="fab fa-css3-alt"></i>
          </li>
          <li className="list-inline-item me-4">
            <i className="fab fa-js"></i>
          </li>
          <li className="list-inline-item me-4">
            <i className="fab fa-react"></i>
          </li>
          <li className="list-inline-item me-4">
            <i className="fab fa-node"></i>
          </li>
          <li className="list-inline-item me-4">
            <i className="fab fa-github"></i>
          </li>
          <li className="list-inline-item me-4">
            <i className="fab fa-npm"></i>
          </li>
          <li className="list-inline-item me-4">
            <i className="fab fa-bootstrap"></i>
          </li>
          <li className="list-inline-item me-4">
            <i className="fab fa-aws"></i>
          </li>
        </ul>
        <div className="mb-3 fs-2 ms-5 text-black">Workflow</div>
        <ul className="fa-ul mb-0 fs-3 pb-5 my-5 ps-5 mx-5 pe-5 text-white">
          <li>
            <span className="fa-li">
              <i className="fas fa-check"></i>
            </span>
            Mobile-First, Responsive Design
          </li>
          <li>
            <span className="fa-li">
              <i className="fas fa-check"></i>
            </span>
            Cross Browser Testing & Debugging
          </li>
          <li>
            <span className="fa-li">
              <i className="fas fa-check"></i>
            </span>
            Cross Functional Teams
          </li>
          <li>
            <span className="fa-li">
              <i className="fas fa-check"></i>
            </span>
            Agile Development & Scrum
          </li>
        </ul>
      </div>
    </div>
  );
}

export default About;
