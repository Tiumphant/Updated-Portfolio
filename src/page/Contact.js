import React, { useEffect } from "react";
import "./Contact.css";
import contactImg from "./asset/contact.jpg";

function Contact() {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in, .fade-up");
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
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-image fade-up">
          <img src={contactImg} alt="Contact" />
        </div>
        <div className="contact-content fade-in">
          <h2>Contact Me</h2>
          <p>Let’s connect! Here’s how you can reach me.</p>
          <ul>
            <li>
              <strong>Email:</strong> nishabairagi@gmail.com
            </li>
            <li>
              <strong>Phone:</strong> +91 9993194739
            </li>
            <li>
              <strong>Location:</strong> India , Indore
            </li>
            <li>
              <strong>LinkedIn:</strong>{" "}
              https://www.linkedin.com/in/nisha-bairagi-2ab190245
            </li>
            <li>
              <strong>GitHub:</strong> github.com/Tiumphant
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Contact;
