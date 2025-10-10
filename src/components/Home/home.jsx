import "./home.css";
import nsrpic from "../../assets/nsrpic.jpg";
import React from "react";

function Home() {
  return (
    <section className="home-container" id="home">
      <div className="home-content">
        <h3>Hi, I'm <span>Md Nisar</span></h3>
        <h1>Full Stack Developer</h1>
        <p>
          I’m a Frontend Developer passionate about crafting clean and
          interactive web experiences using <strong>React.js</strong>,{" "}
          <strong>JavaScript</strong>, <strong>HTML</strong>, and{" "}
          <strong>CSS</strong>.
        </p>
        <p>Building modern, responsive, and user-friendly web interfaces.</p>

        <div className="home-buttons">
          <button className="btn-primary">View Resume</button>
          <button className="btn-secondary">Contact Me</button>
          <button className="btn-outline">View Projects</button>
        </div>
      </div>

      <div className="home-image">
        <img src={nsrpic} alt="Md Nisar" />
      </div>
    </section>
  );
}

export default Home;
