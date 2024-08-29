import React from "react";
import Card from "react-bootstrap/Card";


function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <h4 style={{ textAlign: "justify" }}>
        
            As a young, tech-savvy cybersecurity student, I am constantly seeking opportunities to further advance myself in cybersecurity field.
            I am deeply passionate about understanding and protecting the digital world.
            I enjoy learning the latest security technologies and exploring different aspects of cybersecurity from ethical hacking to digital forensics.
          </h4>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
