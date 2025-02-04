import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiPython, DiGit } from "react-icons/di";
import {
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiKeras,
  SiDocker,
  SiKubernetes,
  SiApachekafka,
  SiApachespark,
  SiMysql,
  SiFastapi,
  SiAmazonaws,
  SiGooglecloud,
  SiJupyter
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" title="Python">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="TensorFlow">
        <SiTensorflow />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="PyTorch">
        <SiPytorch />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Scikit-learn">
        <SiScikitlearn />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Keras">
        <SiKeras />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Jupyter">
        <SiJupyter />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="AWS">
        <SiAmazonaws />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Google Cloud">
        <SiGooglecloud />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Docker">
        <SiDocker />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Kubernetes">
        <SiKubernetes />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Apache Kafka">
        <SiApachekafka />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Apache Spark">
        <SiApachespark />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="FastAPI">
        <SiFastapi />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="MySQL">
        <SiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Git">
        <DiGit />
      </Col>
    </Row>
  );
}

export default Techstack;