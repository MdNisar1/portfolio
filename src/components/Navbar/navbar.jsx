import React, { useState } from "react";
import "./navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = (e) => {
    e.stopPropagation(); // 🔴 VERY IMPORTANT
    setIsOpen(!isOpen);
  };

  return (
    <header className="nav-container">
      <nav>
        <h2 className="logo">Md Nisar</h2>

        <div className={`nav-links ${isOpen ? "open" : ""}`}>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#project">Project</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div
          className={`hamburger ${isOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
