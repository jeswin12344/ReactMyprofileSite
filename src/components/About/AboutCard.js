import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">raviteja </span>
            from <span className="purple"> bangalore, India.</span>
            <br /> I recently graduated and after joined as an intern for the startup company  and now iam looking for active permanent employment.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> ReadingBooks
            </li>
            <li className="about-activity">
              <ImPointRight /> watching movies
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Learn something new everyday"{" "}
          </p>
          <footer className="blockquote-footer">raviteja</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
