import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer id="main-footer-container">
      <div className="top-area">
        <div className="heading-div">
          <h2>Find the right Broadband Internet plan for you.</h2>
          <h4>
            Get Discount upto 20% on Quarterly, Half yearly and Annual plans!
          </h4>
        </div>
        <div id="get-started-btn">
          <button id="top-area-btn">GET STARTED</button>
        </div>
      </div>
      <div id="logo-div">
          <p id="logo-elxer">ELXER</p>
      </div>
      <div className="footer-div-components">
        <div className="one">
            <h3>Our Offerin</h3>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
