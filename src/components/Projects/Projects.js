import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
// import Particle from "../Particle";
// import pwdmng from "../../Assets/Projects/passwordmng.png";
import keylogger from "../../Assets/Projects/Keylogger.svg";
import hashing from "../../Assets/Projects/hash-flow.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      {/* <Particle /> */}
      <Container>
        <h1 className="project-heading">
          My Personal <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently and more are coming soon.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "250px" }}>
          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pwdmng}
              isBlog={false}
              title="PasswordManager"
              description=""
              
            />
          </Col> */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hashing}
              isBlog={false}
              title="Hashing Tool"
              description=""
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={keylogger}
              isBlog={false}
              title="Key-Logger"
              description=""
             
            />
          </Col>
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
