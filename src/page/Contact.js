import React from "react";
import "./Contact.css";
import image from "./asset/image.webp";
import bgvideo from "./asset/217643.mp4";

function Contact() {
  return (
    <div className="contact-wrapper">
      <video
        className="background-video"
        src={bgvideo}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="overlay"></div>

      <div className="contact-container">
        <div className="contact-header text-center">
          <h2>Get in Touch</h2>
          <p>Let's build something amazing together.</p>
        </div>

        <div className="contact-content reverse-layout">
          <div className="contact-details">
            <p>
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your visions.
            </p>
            <p>
              Whether you want to collaborate, hire me, or just say hello — feel
              free to reach out through any of the channels below:
            </p>

            <div className="info-item">
              <h5>Email</h5>
              <p>nisha@example.com</p>
            </div>

            <div className="info-item">
              <h5>Phone</h5>
              <p>+91-12345-67890</p>
            </div>

            <div className="info-item">
              <h5>Location</h5>
              <p>Pune, Maharashtra, India</p>
            </div>

            <div className="social-links">
              <a
                href="https://www.linkedin.com/in/nisha-bairagi-2ab190245"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/Tiumphant/"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href="nishabairagi9196@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                Email Me
              </a>
            </div>
          </div>

          <div className="contact-image">
            <img src={image} alt="Nisha" className="profile-img" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
