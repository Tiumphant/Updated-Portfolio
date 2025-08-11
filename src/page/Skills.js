import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Skills.css";

function Skills() {
  const skills = [
    { name: "HTML5", level: 90 },
    { name: "CSS3", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "React.js", level: 85 },
    { name: "Node.js", level: 75 },
    { name: "Express.js", level: 70 },
    { name: "MongoDB", level: 80 },
    { name: "Bootstrap", level: 90 },
    { name: "Git & GitHub", level: 85 },
    { name: "REST API", level: 75 },
  ];

  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
  }, []);

  return (
    <div ref={sectionRef} className="skills-section">
      <div className="container">
        <h2 className="text-center mb-5 fade-in">My Skills</h2>
        <div className="row">
          {skills.map((skill, index) => (
            <div
              className={`col-md-6 mb-4 skill-card ${visible ? "fade-up" : ""}`}
              key={index}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="skill-item">
                <div className="d-flex justify-content-between">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-level">{skill.level}%</span>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{
                      width: visible ? `${skill.level}%` : "0%",
                      transition: "width 1.5s ease",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
