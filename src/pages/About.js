import React from "react";

function About() {
  return (
    <div>
      {/* <section class="resume-section" id="about"> */}
      <div class="resume-section-content">
        <h1 class="mb-0 text-black">
          Tyler
          <span class="text-success">Davis</span>
        </h1>
        <div class="subheading mb-1 ms-3 text-black">Charlotte, NC 28216</div>
        <span class="d-none2 d-lg-block">
          <img
            class="img-profile rounded-circle mx-auto mb-3"
            src="../../public/Pictureofme.jpg"
            alt="me wearing a bowtie and suspenders"
          />
        </span>
        <p class="lead mb-5 mt-5 text-black">
          I am a Full Stack Web Developer with a background in customer service
          and warehousing that can bring a unique perspective to web development
          and user interaction. I earned a certificate in Full Stack Web
          Development from the UNC Charlotte Coding Boot Camp. Below you will
          see links to a few of my projects as well as my GitHub and LinkedIn
          accounts.
        </p>
      </div>
      <div class="resume-section-content">
        <div class="subheading mb-3">Programming Languages & Tools</div>
        <ul class="list-inline dev-icons">
          <li class="list-inline-item">
            <i class="fab fa-html5"></i>
          </li>
          <li class="list-inline-item">
            <i class="fab fa-css3-alt"></i>
          </li>
          <li class="list-inline-item">
            <i class="fab fa-js"></i>
          </li>
          <li class="list-inline-item">
            <i class="fab fa-react"></i>
          </li>
          <li class="list-inline-item">
            <i class="fab fa-aws"></i>
          </li>
          <li class="list-inline-item">
            <i class="fab fa-node"></i>
          </li>
          <li class="list-inline-item">
            <i class="fab fa-github"></i>
          </li>
          <li class="list-inline-item">
            <i class="fab fa-npm"></i>
          </li>
          <li class="list-inline-item">
            <i class="fab fa-bootstrap"></i>
          </li>
        </ul>
        <div class="subheading mb-3">Workflow</div>
        <ul class="fa-ul mb-0">
          <li>
            <span class="fa-li">
              <i class="fas fa-check"></i>
            </span>
            Mobile-First, Responsive Design
          </li>
          <li>
            <span class="fa-li">
              <i class="fas fa-check"></i>
            </span>
            Cross Browser Testing & Debugging
          </li>
          <li>
            <span class="fa-li">
              <i class="fas fa-check"></i>
            </span>
            Cross Functional Teams
          </li>
          <li>
            <span class="fa-li">
              <i class="fas fa-check"></i>
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
