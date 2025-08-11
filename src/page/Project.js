import React from "react";
import "./Project.css";

function Project() {
  const projects = [
    {
      title: "Hospital Management",
      link: "https://hospital-managment-7vtj.vercel.app/login",
      description:
        "Developed a full-stack Hospital Management System using MERN stack with modules for appointments, departments, patients, and role-based dashboards for Admin, Doctor, and Patient to manage hospital operations efficiently.",
    },
    {
      title: "College Management",
      link: "",
      description:
        "Created a College Management System with features for managing students, faculty, courses, and attendance tracking, ensuring smooth communication and operations across departments.",
    },
    {
      title: "Product Selling Website",
      link: "",
      description:
        "Built an e-commerce platform with product listing, cart management, secure checkout, and order tracking using React, Node.js, and MongoDB.",
    },
  ];

  return (
    <div className="projects-container">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
