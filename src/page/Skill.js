import React, { useEffect } from "react";
import "./Skill.css";

function Skill() {
  useEffect(() => {
    const bars = document.querySelectorAll(".skill-bar-fill");
    bars.forEach((bar) => {
      const width = bar.getAttribute("data-skill");
      setTimeout(() => {
        bar.style.width = width;
      }, 300);
    });
  }, []);

  return (
    <section className="skill-section">
      <div className="skill-container">
        <h2 className="fade-in">My Skills</h2>
        <p>
          I have expertise in both front-end and back-end development. Below are
          some of my top skills with proficiency levels.
        </p>

        <div className="skill fade-up">
          <span>HTML</span>
          <div className="skill-bar">
            <div className="skill-bar-fill" data-skill="95%"></div>
          </div>
        </div>

        <div className="skill fade-up">
          <span>CSS</span>
          <div className="skill-bar">
            <div className="skill-bar-fill" data-skill="90%"></div>
          </div>
        </div>

        <div className="skill fade-up">
          <span>JavaScript</span>
          <div className="skill-bar">
            <div className="skill-bar-fill" data-skill="85%"></div>
          </div>
        </div>

        <div className="skill fade-up">
          <span>React</span>
          <div className="skill-bar">
            <div className="skill-bar-fill" data-skill="88%"></div>
          </div>
        </div>

        <div className="skill fade-up">
          <span>Node.js</span>
          <div className="skill-bar">
            <div className="skill-bar-fill" data-skill="80%"></div>
          </div>
        </div>

        <button className="skill-btn">Learn More</button>
      </div>
    </section>
  );
}

export default Skill;
