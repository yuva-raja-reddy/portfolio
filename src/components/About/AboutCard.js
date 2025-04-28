import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Yuvaraja Reddy Avuthu </span>
            from <span className="purple"> Buffalo, NY.</span>
            <br />
            I recently graduated from SUNY Buffalo with a Master’s in Data Science.
            <br />
            I have 3+ years of experience as an AI/ML Engineer specializing in 
            Generative AI, LLMs, and NLP.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Hiking
            </li>
            <li className="about-activity">
              <ImPointRight /> Adventure Activities
            </li>
            <li className="about-activity">
              <ImPointRight /> Social Service Activities
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Creating Stories and Insights from Data"{" "}
          </p>
          <footer className="blockquote-footer">Yuvaraja</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;