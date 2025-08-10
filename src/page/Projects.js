import React from "react";
import "./Projects.css";
import bgvideo from "../page/asset/217643.mp4"; // Adjust path as needed

const projects = [
  {
    title: "Hospital Management System",
    description:
      "A full-stack MERN application for managing appointments, patients, and doctors with role-based authentication.",
    techStack: "React, Node.js, Express, MongoDB",
    link: "https://hospital-managment-7vtj.vercel.app/login",
  },
  {
    title: "College Management",
    description:
      "College management portal with admin, staff, and student modules.",
    techStack: "React, CSS, Bootstrap",
    link: "https://yourportfolio.live",
  },
  {
    title: "Lead Management System",
    description:
      "Admin system to manage employees, assign leads, and perform CRUD operations securely.",
    techStack: "React, Express, MongoDB",
    link: "https://github.com/yourusername/lead-management-system",
  },
];

function Projects() {
  return (
    <div className="projects-container">
      <video
        className="background-video"
        src={bgvideo}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="overlay"></div>

      <div className="projects-content">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p className="tech-stack">
                <strong>Tech:</strong> {project.techStack}
              </p>
              <a
                href={project.link}
                className="project-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
