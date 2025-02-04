// Toolstack.js
import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiJupyter,
  SiAnaconda,
  SiDocker,
  SiGithub,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" title="VS Code">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Jupyter">
        <SiJupyter />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Anaconda">
        <SiAnaconda />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Docker">
        <SiDocker />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="GitHub">
        <SiGithub />
      </Col>
    </Row>
  );
}

export default Toolstack;