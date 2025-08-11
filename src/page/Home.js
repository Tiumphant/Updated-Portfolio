import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import AOS from "aos";
import "aos/dist/aos.css";

import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";
import "./Home.css";
import img from "../page/asset/image.webp";

export default function Home() {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "Full Stack Developer",
        "Frontend Developer",
        "Backend Developer",
      ],
      typeSpeed: 50,
      backSpeed: 25,
      loop: true,
    });
    AOS.init({ duration: 800, once: true, easing: "ease-out-cubic" });
    return () => typed.destroy();
  }, []);

  return (
    <>
      <section id="home" className="section">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-left" data-aos="fade-right">
              <h1 className="hero-title">
                Hello, I'm <span className="accent">Nisha</span>
              </h1>
              <h2 className="hero-sub">
                I’m a <span ref={typedRef}></span>
                <span className="cursor">|</span>
              </h2>
              <p className="hero-desc">
                I build modern and responsive web applications using React,
                Node.js and MongoDB.
              </p>
              <div style={{ marginTop: 20 }}>
                <a href="#projects" className="btn">
                  View Projects
                </a>
                <a href="#contact" style={{ marginLeft: 12 }} className="btn">
                  Contact Me
                </a>
              </div>
            </div>

            <div className="hero-right text-center" data-aos="fade-left">
              <img src={img} alt="profile" className="hero-img" />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section" data-aos="fade-up">
        <div className="container">
          <About />
        </div>
      </section>

      <section id="projects" className="section" data-aos="fade-up">
        <div className="container">
          <Projects />
        </div>
      </section>

      <section id="skills" className="section" data-aos="fade-up">
        <div className="container">
          <Skills />
        </div>
      </section>

      <section id="contact" className="section" data-aos="fade-up">
        <div className="container">
          <Contact />
        </div>
      </section>
    </>
  );
}
