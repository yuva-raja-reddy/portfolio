import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify", whiteSpace: "normal" }}>
          {props.description}
        </Card.Text>
        <Button
          variant="primary"
          href={props.demoLink}
          target="_blank"
        >
          <CgWebsite /> &nbsp;Try it
        </Button>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;