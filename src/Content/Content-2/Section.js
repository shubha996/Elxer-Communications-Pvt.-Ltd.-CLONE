import React from "react";
import "./section.css";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

function Section() {
  return (
    <>
      <Navbar id="navbar-refernow" bg="light">
        <Container>
          <div className="container-div">
            <h3 className="logo-text">Refer and Earn</h3>
            <p className="para-text">
              Refer Elxer Internet services to your friends or family and get
              the <span id="dark">DISCOUNT</span> of <span id="dark">₹250</span>
              on your next bill!
            </p>
            <Button className="button-text" id="refernow-btn">REFER NOW</Button>
          </div>
        </Container>
      </Navbar>
    </>
  );
}
export default Section;
