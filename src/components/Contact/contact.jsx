import './contact.css';
import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub } from "react-icons/fa";

function Contact (){
  return(
    <section className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">📞 Contact Me</h2>
        <p className="contact-subtitle">
          I'd love to connect! Reach out through any platform below.
        </p>

        <div className="contact-info">
          <div className="contact-item">
            <FaEnvelope className="icon" />
            <span>mdnisar@gmail.com</span>
          </div>

          <div className="contact-item">
            <FaPhoneAlt className="icon" />
            <span>+91 98765 43210</span>
          </div>

          <div className="contact-item">
            <FaLinkedin className="icon" />
            <a
              href="https://www.linkedin.com/in/mdnisar"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/mdnisar
            </a>
          </div>

          <div className="contact-item">
            <FaGithub className="icon" />
            <a
              href="https://github.com/mdnisar"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/mdnisar
            </a>
          </div>
        </div>

        <form className="contact-form">
          <h3>Send a Message</h3>
          <input type="text" placeholder="Your Full Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="4" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact;
