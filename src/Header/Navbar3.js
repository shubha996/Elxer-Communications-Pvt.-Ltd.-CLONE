import React from "react";
import "./navbar3.css";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

function Navbar3() {
  return (
    <>
      <Navbar className="navbar-3" bg="light" variant="light">
        <Container>
          <Navbar.Brand>
            <a id="logo-link" href="https://www.google.co.in/">
              <p id="elxer-logo">ELXER</p>
              <span id="below-logo">Stay Safe keep Social Distancing</span>
            </a>
          </Navbar.Brand>
          <Navbar>
            <li className="listItem"><a id="link" href="#link">Home</a></li>
            <li className="listItem"><a id="link" href="#link">Plan</a></li>
            <li className="listItem"><a id="link" href="#link">Business</a></li>
            <li className="listItem"><a id="link" href="#link">Support</a></li>
            <li className="listItem"><a id="link" href="#link">Contact Us</a></li>
            <Button className="navbar-3-btn" variant="light">Pay & Recharge</Button>
            <Button className="navbar-3-btn" id="newbtn3" variant="light">New Connection</Button>
          </Navbar>
          <div id="iva-mobile-nav-icon" className="iva-mobile-dropdown">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <div className="iva-mobile-menue">
              <ul>
                <li className="listItem"><a id="link-hamburger" href="#link">Home</a></li>
                <li className="listItem"><a id="link-hamburger" href="#link">Plan</a></li>
                <li className="listItem"><a id="link-hamburger" href="#link">Business</a></li>
                <li className="listItem"><a id="link-hamburger" href="#link">Support</a></li>
                <li className="listItem"><a id="link-hamburger" href="#link">Contact Us</a></li>
                <li className="listItem"><a id="link-hamburger" href="#link">Pay & Recharge</a></li>
                <li className="listItem"><a id="link-hamburger" href="#link">New Connection</a></li>
              </ul>
            </div>
          </div>
        </Container>
      </Navbar>
    </>
  );
}
export default Navbar3;
