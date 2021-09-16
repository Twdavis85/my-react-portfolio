import React from "react";
import Row from "react-bootstrap/Row";
import projects from "../utils/projects.json";

function Portfolio() {
  return (
    <Row xs={1} md={2} className="g-4">
      {projects.map((project) => {
        return (
          <div key={project.id} className="card">
            <img
              src={project.image}
              className="card-img-top"
              alt={project.name + " screenshot"}
            />
            <div className="card-body">
              <h4 className="card-title">
                <a href="./images/nine.png" target="_blank" rel="noreferrer">
                  {project.name}
                </a>
              </h4>
              <h5 className="card-text">{project.description}</h5>
              <h6>{project.tech}</h6>
              <h6>
                <a href={project.repo} target="_blank" rel="noreferrer">
                  GitHub Repository
                </a>
              </h6>
            </div>
          </div>
        );
      })}
    </Row>
  );
}

export default Portfolio;
