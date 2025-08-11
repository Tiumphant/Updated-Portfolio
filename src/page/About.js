import "./About.css";
import { useEffect } from "react";

function About() {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );
    elements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <section className="about section fade-in" id="about">
      <div className="about__container container grid">
        <div className="about__img-wrapper float-animation">
          <img
            src="https://img.freepik.com/free-vector/cute-girl-hacker-operating-laptop-cartoon-vector-icon-illustration-people-technology-isolated-flat_138676-9487.jpg"
            alt="Nisha"
            className="about__img"
          />
        </div>

        <div className="about__data">
          <h2 className="section__title">About Me</h2>
          <p className="about__description">
            Hi, I'm <strong>Nisha</strong> – a passionate full-stack developer
            with a love for crafting clean and responsive web applications.
            Skilled in React, Node.js, MongoDB, and Express.
          </p>
          <p className="about__description">
            I enjoy learning new things, solving real-world problems through
            code, and collaborating with teams to build meaningful products.
          </p>
          <p className="about__description">
            In my free time, I explore UI/UX trends, contribute to GitHub
            projects, and write technical blogs.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
