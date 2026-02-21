import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
  <div className="footer-content">

    <div className="footer-links">
      <a href="https://github.com/dessymol" target="_blank" rel="noreferrer">
        GitHub
      </a>
      <a href="https://www.linkedin.com/in/dessymol-dixon-a56141263" target="_blank" rel="noreferrer">
        LinkedIn
      </a>
      <a href="mailto:youremail@example.com">
        Email
      </a>
    </div>

    <p className="footer-copy">
      © {year} Dessymol Dixon. Designed & Built by Me.
    </p>

  </div>
</footer>
  );
};

export default Footer;

