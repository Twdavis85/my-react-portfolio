import React from "react";

function About() {
  return (
    <div>
      {/* <section class="resume-section" id="about"> */}
      <div className="resume-section-content">
        <h1 className="mb-0 text-black">
          Tyler
          <span className="text-success">Davis</span>
        </h1>
        <div className="subheading mb-1 ms-3 text-black">Charlotte, NC 28216</div>
        <span className="d-none2 d-lg-block">
          <img
            className="img-profile rounded-circle mx-auto mb-3"
            src="../../public/Pictureofme.jpg"
            alt="me wearing a bowtie and suspenders"
          />
        </span>
        <p className="lead mb-5 mt-5 text-black">
          I am a Full Stack Web Developer with a background in customer service
          and warehousing that can bring a unique perspective to web development
          and user interaction. I earned a certificate in Full Stack Web
          Development from the UNC Charlotte Coding Boot Camp. Below you will
          see links to a few of my projects as well as my GitHub and LinkedIn
          accounts.
        </p>
      </div>
      <div className="resume-section-content">
        <div className="subheading mb-3">Programming Languages & Tools</div>
        <ul className="list-inline dev-icons">
          <li className="list-inline-item">
            <i className="fab fa-html5"></i>
          </li>
          <li className="list-inline-item">
            <i className="fab fa-css3-alt"></i>
          </li>
          <li className="list-inline-item">
            <i className="fab fa-js"></i>
          </li>
          <li className="list-inline-item">
            <i className="fab fa-react"></i>
          </li>
          <li className="list-inline-item">
            <i className="fab fa-aws"></i>
          </li>
          <li className="list-inline-item">
            <i className="fab fa-node"></i>
          </li>
          <li className="list-inline-item">
            <i className="fab fa-github"></i>
          </li>
          <li className="list-inline-item">
            <i className="fab fa-npm"></i>
          </li>
          <li className="list-inline-item">
            <i className="fab fa-bootstrap"></i>
          </li>
        </ul>
        <div className="subheading mb-3">Workflow</div>
        <ul className="fa-ul mb-0">
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
      {/* </section> */}
    </div>
  );
}

export default About;
