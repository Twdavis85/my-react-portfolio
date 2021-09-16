import React from "react";

function Footer() {
  return (
    <div className="social-icons">
      <a
        className="social-icon"
        href="https://www.linkedin.com/in/davis-tyler/"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fab fa-linkedin"></i>
      </a>
      <a
        className="social-icon"
        href="https://github.com/Twdavis85"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fab fa-github"></i>
      </a>
      <a className="social-icon" href="mailto:tdnc85@yahoo.com">
        <i className="fab fa-yahoo"></i>
      </a>
      <a className="social-icon" href="tel:9802771457">
        <i className="fas fa-mobile-alt"></i>
      </a>
    </div>
  );
}

export default Footer;
