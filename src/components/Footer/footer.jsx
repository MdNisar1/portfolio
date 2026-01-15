import './footer.css';
import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-contact">
          <h2>Give us a call</h2>
          <h1>+91 6207278548</h1>
        </div>

        <div className="footer-content">
          <div className="footer-section">
            <p>Email: mdnisarktr62.com</p>
            <p>Phone: +91 6207278548</p>
            <p>Address: New Delhi, India</p>
          </div>

          <div className="footer-section">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaTwitter /></a>
              <a href="https://www.linkedin.com/in/md-nisar-5676792b6/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
              <a href="https://github.com/mdnisar1" target="_blank" rel="noreferrer"><FaGithub /></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 Md Nisar. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
