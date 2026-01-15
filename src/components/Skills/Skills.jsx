import './skills.css';
import React from 'react';
import { FaHtml5, FaCss3Alt, FaReact, FaPython } from "react-icons/fa";
import { SiJavascript, SiMongodb } from "react-icons/si";

function Skills() {
  return (
    <section className="education-section" id="skills">
      <h1 className="education-title">Skills</h1>

      <div className="education-container">

        {/* Row 1 */}
        <div className="edu-card html">
          <FaHtml5 className="icon" />
          <h2>HTML</h2>
        </div>

        <div className="edu-card css">
          <FaCss3Alt className="icon" />
          <h2>CSS</h2>
        </div>

        <div className="edu-card js">
          <SiJavascript className="icon" />
          <h2>JavaScript</h2>
        </div>

        {/* Row 2 */}
        <div className="edu-card react">
          <FaReact className="icon" />
          <h2>React.js</h2>
        </div>
      </div>
    </section>
  );
}

export default Skills;
