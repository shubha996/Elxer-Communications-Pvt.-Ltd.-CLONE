import React from "react";
import "./navbar1.css";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

function Navbar1() {
  return (
    <>
      <Navbar className="navbar1" bg="dark">
        <div className="navbar-container1">
        <Container>
          <Navbar className="navbar-text-1">
            <p>
              <span className="blink">📺</span>Watch your favourites shows!
              Bring home the fun with all new <b> Elxer OTT </b>plans.
            </p>
            <Button className="btn-navbar1" variant="light">
              Subscribe Now
            </Button>
          </Navbar>
        </Container>
        </div>
      </Navbar>
    </>
  );
}
export default Navbar1;
