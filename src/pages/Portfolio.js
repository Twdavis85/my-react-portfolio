import React from "react";
import { Row, Card, Col } from "react-bootstrap";
import projects from "../utils/projects.json";

function Portfolio() {
  return (
    <Row xs={1} md={2} className="g-4 p-4">
      {projects.map((project) => {
        return (
          <Col key={project.id}>
            <Card className="h-100">
              <Card.Img
                variant="top"
                src={project.image}
                alt={project.name + " screenshot"}
              />
              <Card.Body>
                <Card.Title className="mb-4 fs-1">
                  <a href={project.link} target="_blank" rel="noreferrer">
                    {project.name}
                  </a>
                </Card.Title>
                <Card.Text>
                  <h5 className="fs-4">{project.description}</h5>
                  <h6 className="mt-4 fs-5">{project.tech}</h6>
                  <h6 className="mt-5 fs-4">
                    <a href={project.repo} target="_blank" rel="noreferrer">
                      GitHub Repository
                    </a>
                  </h6>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
}

export default Portfolio;
