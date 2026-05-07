import React from "react";
import "./style.css";
import profileImg from "../../assets/img/pic.png";
import travel1 from "../../assets/img/m.jpeg";
import travel2 from "../../assets/img/m1.jpeg";
import travel3 from "../../assets/img/m2.jpeg";
import travel4 from "../../assets/img/m3.jpeg";
import travel5 from "../../assets/img/m4.jpeg";
import travel6 from "../../assets/img/m5.jpeg";
import travel7 from "../../assets/img/m7.jpeg";
import travel8 from "../../assets/img/m8.jpeg";

import { useState } from "react";
import MailPopup from "../../utils/mail/MailPopup";
const AboutPage = () => {
  const [open, setOpen] = useState(false);
  const galleryImages = [
    travel1,
    travel2,
    travel3,
    travel4,
    travel5,
    travel6,
    travel7,
    travel8,
  ];
  const skills = [
    "Travel Planning",
    "Photography",
    "Video Editing",
    "Content Creation",
    "Social Media",
    "Brand Collaboration",
  ];

  const stats = [
    { number: "50+", label: "Trips Completed" },
    { number: "20+", label: "Destinations" },
    { number: "100+", label: "Photos Captured" },
    { number: "24/7", label: "Travel Passion" },
  ];

  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-hero-content">
          <p className="about-tag">ABOUT ME</p>
          <h1>
            Welcome to Halfway <br />
            Manpower Consultant
          </h1>{" "}
          <p className="about-subtitle">
            A manpower consultant, also known as a recruitment consultant or
            human resources (HR) consultant, is a professional or agency that
            provides services related to workforce management. They assist
            organizations in finding the right candidates for various roles,
            optimizing human resources processes, and improving workforce
            productivity.
          </p>
        </div>
      </section>

      <section className="about-main">
        <div className="about-left">
          <div className="about-image-card">
            <img src={profileImg} alt="Abi" />
          </div>
        </div>

        <div className="about-right">
          <p className="section-mini">ONLINE COUNSELING</p>

          <h2>Your Health Is Our Priority</h2>

          <p>
            Online guidance and counseling services are available to support
            your mental and emotional well-being. We care for your health and
            ensure you receive proper guidance with care and confidence.
          </p>

          <p>
            We provide professional support for mental health guidance, stress
            management, emotional balance, and healthy lifestyle habits to help
            you live a peaceful and positive life.
          </p>

          <div className="skills-list">
            <span className="skill-chip">Mental Health Guidance</span>
            <span className="skill-chip">General Well-being</span>
            <span className="skill-chip">Stress Management</span>
            <span className="skill-chip">Social & Emotional Support</span>
            <span className="skill-chip">Healthy Mind Habits</span>
            <span className="skill-chip">Anxiety Guidance</span>
            <span className="skill-chip">Depression Support</span>
          </div>

          <div style={{ marginTop: "25px" }}>
            <h3 style={{ color: "gold", marginBottom: "10px" }}>
              Counselor Details
            </h3>
            <p>
              <strong>Arun.K</strong>
            </p>
            <p>MSc Nursing (Psychiatric & Counseling)</p>
            <p>
              <strong>WhatsApp:</strong> 9952687642
            </p>
            <p>
              <strong>Instagram:</strong> @ar.un5354
            </p>
            <button
              className="book-btn"
              onClick={() => {
                setOpen(true);
              }}
            >
              Book Now
            </button>{" "}
          </div>
        </div>
      </section>

      <section className="about-stats">
        {stats.map((item, index) => (
          <div key={index} className="stat-card">
            <h3>{item.number}</h3>
            <p>{item.label}</p>
          </div>
        ))}
      </section>

      <section className="about-gallery">
        {galleryImages.map((img, index) => (
          <div
            key={index}
            className={`gallery-card ${index === 0 ? "large" : ""}`}
          >
            <img src={img} alt={`Gallery ${index + 1}`} />
          </div>
        ))}
      </section>

      <section className="about-journey">
        <p className="section-mini">OUR SERVICES</p>

        <h2>We Care About Your Future & Well-being</h2>

        <p>
          We are committed to supporting individuals through professional
          manpower consultancy, overseas guidance, verification services, and
          mental health counseling. Our goal is to provide trusted support that
          helps people build a successful and confident future.
        </p>

        <p>
          From career opportunities to emotional well-being, we believe every
          person deserves proper guidance, genuine care, and the right direction
          to achieve their goals and live a better life.
        </p>
      </section>
      <MailPopup open={open} setOpen={setOpen} />
    </div>
  );
};

export default AboutPage;
