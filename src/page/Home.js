import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import bgvedio from "../page/asset/217643.mp4";
import "./Home.css";
import img from "../page/asset/image.webp";

function Home() {
  const typedElement = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: [
        "Full Stack Developer",
        "Frontend Developer",
        "Backend Developer",
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="home-container">
      <video
        className="background-video"
        src={bgvedio}
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="overlay"></div>

      <section className="firstsection">
        <div className="leftsection">
          <p className="intro-text">
            Hi, My name is <span className="purple">Nisha</span>
          </p>
          <div className="subheading">and I am a Passionate</div>
          <span id="element" ref={typedElement}></span>
          <span className="typed-cursor">|</span>

          <div className="button">
            <a
              href="https://drive.google.com/file/d/1e_0AbyBYCmBUNJaM_MKjxq7xbU2faPOx/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>Download CV</button>
            </a>
            <a href="#contact">
              <button>Contact Me</button>
            </a>
          </div>
        </div>

        <div className="rightsection">
          <img src={img} alt="Nisha" />
        </div>
      </section>
    </div>
  );
}

export default Home;
