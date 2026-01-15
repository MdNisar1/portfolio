import React, { useState } from "react";
import "./project.css";

function Project() {
  const projects = [
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREtLoJmv6c_zyeH25zH2i1EuBugrCZE62dMQ&s",
      title: "Design Art",
      desc: "A creative UI design project showcasing layout & aesthetics.",
      live: "#",
      github: "#"
    },
    {
      img: "https://www.shutterstock.com/image-photo/online-selling-concept-digital-marketing-600nw-2581243371.jpg",
      title: "Marketing",
      desc: "Landing page for digital marketing company built with React.",
      live: "#",
      github: "#"
    },
    {
      img: "https://www.shutterstock.com/image-photo/real-image-light-bulb-exploding-600nw-2479847037.jpg",
      title: "Creative Design",
      desc: "Modern responsive portfolio concept with animation.",
      live: "#",
      github: "#"
    },
    {
      img: "https://t4.ftcdn.net/jpg/04/90/33/39/360_F_490333979_EQdf0tNa0W7MdstKjrGwnjQjoxfYP2zO.jpg",
      title: "Programming",
      desc: "A coding-based project integrating APIs & MongoDB backend.",
      live: "#",
      github: "#"
    },
  ];

  const [modalOpen, setModalOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(null);

  const openModal = (project) => {
    setActiveProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setActiveProject(null);
  };

  return (
    <section className="projects-section" id="project">
      <div className="project-header">
        <h3>Projects</h3>
        <h1>Explore My Work</h1>
      </div>

      <div className="projects-grid">
        {projects.map((proj, index) => (
          <div className="project-card" key={index} onClick={() => openModal(proj)}>
            <img src={proj.img} alt={proj.title} />
            <div className="project-overlay">
              <h2>{proj.title}</h2>
              <p>{proj.desc}</p>
              <button>View Details</button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalOpen && activeProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={activeProject.img} alt={activeProject.title} />
            <h2>{activeProject.title}</h2>
            <p>{activeProject.desc}</p>
            <div className="modal-buttons">
              <a href={activeProject.live} target="_blank" rel="noreferrer">
                <button>Live Demo</button>
              </a>
              <a href={activeProject.github} target="_blank" rel="noreferrer">
                <button>GitHub</button>
              </a>
            </div>
            <span className="close-modal" onClick={closeModal}>&times;</span>
          </div>
        </div>
      )}
    </section>
  );
}

export default Project;
