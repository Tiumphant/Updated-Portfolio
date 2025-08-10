import React from "react";
import "./About.css";
import bgvedio from "../page/asset/2176431.mp4";

function About() {
  return (
    <div className="about-wrapper">
      <video
        className="background-video"
        src={bgvedio}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="overlay"></div>

      <div className="about-container">
        <div className="about-content">
          <div className="about-text">
            <h2>About Me</h2>
            <p>
              Hi, I'm <strong>Nisha</strong> – a passionate full-stack developer
              with a love for crafting clean and responsive web applications.
              I'm skilled in technologies like React, Node.js, MongoDB, and
              Express.
            </p>
            <p>
              I enjoy learning new things, solving real-world problems through
              code, and collaborating with teams to build meaningful products.
            </p>
            <p>
              In my free time, I explore UI/UX design trends, contribute to
              GitHub projects, and write technical blogs.
            </p>
          </div>
          <div className="about-image">
            <img
              src="https://img.freepik.com/free-vector/cute-girl-hacker-operating-laptop-cartoon-vector-icon-illustration-people-technology-isolated-flat_138676-9487.jpg"
              alt="Nisha"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
