import './about.css';
import React from 'react';
import profile from '../../assets/nsr.jpg'; // apni actual image ka path daal dena

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        
        {/* Left Side Image */}
        <div className="about-image">
          <img src={profile} alt="Md Nisar" />
        </div>

        {/* Right Side Content */}
        <div className="about-content">
          <h2>About Me</h2>
          <h3>Frontend Developer</h3>
          <p>
            Hello! I’m <b>Md Nisar</b>, a passionate Frontend Developer who loves
            creating beautiful, responsive, and user-focused web experiences.
            I work with <b>HTML, CSS, JavaScript, React.js</b>, and have
            knowledge of <b>MongoDB</b> for backend understanding.
          </p>
          <p>
            I enjoy learning new tools, exploring creative designs, and turning
            ideas into real projects that make a difference.
          </p>

          <div className="skills">
            <h4>My Skills</h4>
            <ul>
              <li>HTML5 / CSS3</li>
              <li>JavaScript (ES6+)</li>
              <li>React.js</li>
              <li>MongoDB</li>
              <li>Responsive Web Design</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
