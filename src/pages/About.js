import React from "react";

function About() {
  return (
    <div className="bg-secondary">
      {/* <section class="resume-section" id="about"> */}
      <div>
        {/* <h1 className="mb-0 text-black">
          Tyler
          <span className="text-success">Davis</span>
        </h1>
        <div className="subheading mb-1 ms-3 text-black">
          Charlotte, NC 28216
        </div> */}
        <span className="d-none2 d-lg-block">
          <img
            className="img-profile rounded-circle mx-auto mb-1 mt-3"
            src="../images/Pictureofme.jpg"
            alt="me wearing a bowtie and suspenders"
          />
        </span>
        <h2 className="my-5 ps-5 mx-5 pe-5 text-white">
          I am a Full Stack Web Developer with a background in customer service
          and warehousing that can bring a unique perspective to web development
          and user interaction. I earned a certificate in Full Stack Web
          Development from the UNC Charlotte Coding Boot Camp. Below you will
          see links to a few of my projects as well as my GitHub and LinkedIn
          accounts.
        </h2>
      </div>
      <div className="text-white">
        <div className="mb-3 fs-2 ms-5 text-black">Programming Languages & Tools</div>
        <ul className="fs-1">
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
        <div className="mb-3 fs-2 ms-5 text-black">Workflow</div>
        <ul className="fa-ul mb-0 fs-3">
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
