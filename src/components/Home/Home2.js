import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
          <h1 style={{ fontSize: "2.6em" }}>
            LET ME <span className="purple"> INTRODUCE </span> MYSELF
          </h1>
          <p className="home-about-body">
            I am an AI/ML Engineer specializing in 
            <i>
              <b className="purple"> Generative AI, NLP, and Machine Learning. </b>
            </i>
            <br />
            <br />
            I have expertise in building and deploying scalable AI applications using  
            <i>
              <b className="purple"> Python, PyTorch, TensorFlow, and Hugging Face Transformers. </b>
            </i>
            <br />
            <br />
            My field of interest includes developing  
            <i>
              <b className="purple"> Large Language Models (LLMs), Retrieval-Augmented Generation (RAG) systems, and cloud-based AI solutions. </b>
            </i>
            <br />
            <br />
            I am experienced in deploying AI models using  
            <i>
              <b className="purple"> AWS, GCP, FastAPI, Docker, and Kubernetes, </b>
            </i>
            ensuring production-ready scalability and efficiency.
          </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/yuva-raja-reddy"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/yuvaraja_0520"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/yuvarajareddy/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/yuva_raja_reddy"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://huggingface.co/yuvarajareddy001"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  {/* <AiOutlineCode /> */}
                  <span style={{ fontSize: "1.5em" }}>🤗</span>
                </a>
              </li>
              
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
