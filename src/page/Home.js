import React, { useEffect, useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import image from "./asset/image.jpg";
import "./Hone.css";
import About from "./About";
import Project from "./Project";
import Skill from "./Skill";
import Contact from "./Contact";

function Home() {
  const [displayText, setDisplayText] = useState("");
  const roles = ["Web Development", "Frontend Design", "Full Stack Developer"];

  const indexRef = useRef(0);
  const charIndexRef = useRef(0);
  const isDeletingRef = useRef(false);

  useEffect(() => {
    AOS.init({ duration: 1200, once: true, easing: "ease-in-out" });

    const type = () => {
      const currentRole = roles[indexRef.current];

      if (!isDeletingRef.current) {
        if (charIndexRef.current < currentRole.length) {
          setDisplayText(currentRole.substring(0, charIndexRef.current + 1));
          charIndexRef.current++;
          setTimeout(type, 100);
        } else {
          isDeletingRef.current = true;
          setTimeout(type, 1500);
        }
      } else {
        if (charIndexRef.current > 0) {
          setDisplayText(currentRole.substring(0, charIndexRef.current - 1));
          charIndexRef.current--;
          setTimeout(type, 50);
        } else {
          isDeletingRef.current = false;
          indexRef.current = (indexRef.current + 1) % roles.length;
          setTimeout(type, 200);
        }
      }
    };

    type();
  }, []);

  return (
    <>
      <section className="fade-section" data-aos="fade-up" data-aos-delay="200">
        <div className="home-container">
          <div className="home-left" data-aos="fade-right">
            <h1>
              I'm <span className="highlight-name">Nisha Bairagi</span>
            </h1>
            <p>PASSIONATE ABOUT</p>
            <h2>
              <span className="highlight-title">{displayText}</span>
              <span className="cursor">|</span>
            </h2>
            <div
              className="button-group"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <button
                className="btn-primary"
                onClick={() =>
                  window.scrollTo({ top: 800, behavior: "smooth" })
                }
              >
                Projects
              </button>
              <a
                href="https://drive.google.com/file/d/1e_0AbyBYCmBUNJaM_MKjxq7xbU2faPOx/view"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                CV
              </a>
            </div>
          </div>

          <div
            className="home-right floating"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <img src={image} alt="Developer" />
          </div>
        </div>
      </section>
      <section className="fade-section" data-aos="fade-up">
        <div data-aos="fade-right" data-aos-delay="200">
          <About />
        </div>
      </section>

      <section className="fade-section" data-aos="fade-up">
        <div data-aos="zoom-in" data-aos-delay="300">
          <Project />
        </div>
      </section>

      <section className="fade-section" data-aos="fade-up">
        <div data-aos="fade-left" data-aos-delay="300">
          <Skill />
        </div>
      </section>

      <section className="fade-section" data-aos="fade-up">
        <div data-aos="fade-up" data-aos-delay="200">
          <Contact />
        </div>
      </section>
    </>
  );
}

export default Home;
