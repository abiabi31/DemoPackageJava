import React from "react";
import "./style.css";

import profileImg from "../../assets/img/5.jpeg";
import travel1 from "../../assets/img/images.jpeg";
import travel2 from "../../assets/img/4.jpeg";
import travel3 from "../../assets/img/6.jpeg";

const AboutPage = () => {
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
          <p className="section-mini">WHO AM I</p>
          <h2>Passionate Traveler & Creative Explorer</h2>
          <p>
            I enjoy exploring new places, learning about different cultures, and
            sharing my travel experiences with others. My goal is to inspire
            people through simple stories, beautiful visuals, and practical
            travel ideas.
          </p>
          <p>
            I also enjoy content creation, photography, and building clean,
            modern digital experiences. Every trip teaches me something new, and
            I love turning those moments into meaningful memories.
          </p>

          <div className="skills-list">
            {skills.map((skill, index) => (
              <span key={index} className="skill-chip">
                {skill}
              </span>
            ))}
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
        <div className="gallery-card large">
          <img src={travel1} alt="Travel 1" />
        </div>
        <div className="gallery-card">
          <img src={travel2} alt="Travel 2" />
        </div>
        <div className="gallery-card">
          <img src={travel3} alt="Travel 3" />
        </div>
      </section>

      <section className="about-journey">
        <p className="section-mini">MY JOURNEY</p>
        <h2>Why I Love What I Do</h2>
        <p>
          Travel is not just about visiting places. It is about feeling new
          experiences, meeting people, understanding cultures, and creating
          unforgettable moments. I believe every journey has a story, and I love
          bringing those stories to life.
        </p>
      </section>
    </div>
  );
};

export default AboutPage;
