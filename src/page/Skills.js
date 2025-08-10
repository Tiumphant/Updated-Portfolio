import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Skills.css";
import bgvideo from "../page/asset/2176431.mp4";

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

  return (
    <div className="skills-section position-relative">
      <video
        className="background-video"
        src={bgvideo}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="overlay"></div>

      <div className="container position-relative">
        <h2 className="text-center text-white mb-4">My Skills</h2>
        <div className="row">
          {skills.map((skill, index) => (
            <div className="col-md-6 mb-4" key={index}>
              <div className="skill-item">
                <div className="d-flex justify-content-between text-white">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-level">{skill.level}%</span>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${skill.level}%` }}
                    aria-valuenow={skill.level}
                    aria-valuemin="0"
                    aria-valuemax="100"
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
