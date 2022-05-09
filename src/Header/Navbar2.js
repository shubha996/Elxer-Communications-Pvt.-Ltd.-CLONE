import React from "react";
import "./navbar2.css";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

function Navbar2() {
  return (
    <>
      <Navbar className="navbar2" bg="primary" variant="dark">
        <Container>
          <Navbar className="navbar-text-2">
            <p>
              Customer Support:
              <a id="nt-2-link" className="link-tag" href="#link">
                0771-677-7777
              </a>
              (24/7) | Email:
              <a id="nt-2-link" className="link-tag" href="#link">
                support@elxer.com
              </a>
            </p>
          </Navbar>
        </Container>

        <Container>
          <Navbar className="navbar-text-3">
            <li id="hiring-btn"></li>
            <li id="li-not-req">
              <a className="link-tag" href="#link">
                We're Hiring
              </a>
            </li>
            <li id="li-not-req">
              <a className="link-tag" href="#link">
                Customer Portal
              </a>
            </li>
          </Navbar>
        </Container>
      </Navbar>
    </>
  );
}
export default Navbar2;
