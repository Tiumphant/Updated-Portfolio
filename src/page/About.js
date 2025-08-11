import React from "react";
import aboutImage from "./asset/codinggirl.avif";
import "./About.css";

function About() {
  return (
    <div className="about-container">
      <div className="about-left float-up-down">
        <img src={aboutImage} alt="About me" />
      </div>

      <div className="about-right fade-in-right">
        <h1>About Me</h1>
        <p>
          Hello! I'm <span className="highlight-name">Nisha Bairagi</span>, a
          passionate <strong>Full Stack Developer</strong> with a love for
          building engaging, responsive, and dynamic web applications. I
          specialize in both frontend and backend development, ensuring smooth
          user experiences and robust server-side logic.
        </p>
        <p>
          With expertise in <b>React, Node.js, Express, and MongoDB</b>, I
          continuously strive to learn new technologies and stay updated with
          modern development trends.
        </p>
        <button className="btn-primary">Know More</button>
      </div>
    </div>
  );
}

export default About;
