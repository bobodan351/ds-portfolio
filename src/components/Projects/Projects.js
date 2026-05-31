import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import adf from "../../Assets/Projects/Screenshot 2026-05-30 233646.png";
import bqSpa from "../../Assets/Projects/Screenshot 2026-05-30 233810.png";
import weChat from "../../Assets/Projects/Screenshot 2026-05-30 233938.png";
import chhapru from "../../Assets/Projects/Screenshot 2026-05-30 234255.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weChat}
              isBlog={false}
              title="weChat"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Daisy-UI, and MongoDB, ExpressJs, Socket.io, TailwindCss, Cloudinary. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/bobodan351/first-chat-app"
              demoLink="https://first-chat-app-limm.vercel.app/signup"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bqSpa}
              isBlog={false}
              title="Bq Beauty Pro n Spa"
              description="BQ Beauty Spa is a professional beauty and wellness clinic based in Lagos, Nigeria, that offers a comprehensive suite of aesthetic and self-care treatments, including advanced facials, professional makeup, semi-permanent cosmetics, teeth whitening, and nail care."
              ghLink="https://github.com/bobodan351/bq-beauty-pro-n-spa"
              demoLink="https://bq-beauty-pro-n-spa.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={adf}
              isBlog={false}
              title="Apeke Dynasty Foundation"
              description="The Apeke Dynasty Foundation is an NGO focused on humanitarian service, youth empowerment, and community development, specifically through initiatives in Lagos, Nigeria. They provide free vocational training, including baking and wig-making, alongside health checkups and drug abuse awareness campaigns, aiming to uplift and empower the local community."
              ghLink="https://github.com/bobodan351/foundation"
              demoLink="https://foundation-ta2t.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chhapru}
              isBlog={false}
              title="Roofing Website"
              description="A group of roofing construction workers.Repairing ,Installing,Replacing,Shading,Coating , etc"
              ghLink="https://github.com/bobodan351/roofing-company"
              demoLink="https://roofing-company-three.vercel.app/"
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
