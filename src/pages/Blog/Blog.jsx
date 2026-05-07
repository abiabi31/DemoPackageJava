import { Box, Button } from "@mui/material";
import { useRef } from "react";

import df from "../../assets/img/df.mp4";
import "./style.css";
import flySound from "../../assets/img/fly.mp3";
import img1 from "../../assets/img/n1.png";
import img2 from "../../assets/img/n6.jpeg";
import img3 from "../../assets/img/n3.jpeg";
import img4 from "../../assets/img/n4.jpeg";
import img5 from "../../assets/img/n5.jpeg";
import MechanicalEngineer from "../../assets/img/MechanicalEngineer.jpeg";
import CivilEngineer from "../../assets/img/CivilEngineer.jpeg";
import mason from "../../assets/img/mason.jpeg";
import Welder from "../../assets/img/Welder.jpeg";
import driver from "../../assets/img/driver.jpeg";
function Blog() {
  const audioRef = useRef(null);

  const destinations = [
    {
      id: "dest-1",
      title: "Staff Nurse",
      location: "Dubai",
      image: img4,
      duration: "Full Time",
    },
    {
      id: "dest-2",
      title: "ICU Nurse",
      location: "Qatar",
      image: img1,
      duration: "Contract",
    },
    {
      id: "dest-3",
      title: "Civil Engineer",
      location: "Saudi Arabia",
      image: CivilEngineer,
      duration: "Full Time",
    },
    {
      id: "dest-4",
      title: "Mechanical Engineer",
      location: "Kuwait",
      image: MechanicalEngineer,
      duration: "Shift Based",
    },
    {
      id: "dest-5",
      title: "Mason",
      location: "Oman",
      image: mason,
      duration: "Full Time",
    },
    {
      id: "dest-6",
      title: "Welder",
      location: "Malaysia",
      image: Welder,
      duration: "Project Based",
    },
    {
      id: "dest-7",
      title: "Registered Nurse",
      location: "Singapore",
      image: img2,
      duration: "Full Time",
    },
    {
      id: "dest-8",
      title: "Driver",
      location: "Bahrain",
      image: driver,
      duration: "Contract",
    },
  ];

  const handlePlaneClick = (e) => {
    e.stopPropagation();

    const audio = audioRef.current;
    if (!audio) return;

    audio.pause();
    audio.currentTime = 0;
    audio.volume = 0.6;

    audio.play().catch((err) => {
      console.log("Play error:", err);
    });
  };

  return (
    <>
      {/* Video Section */}
      <Box className="video-section">
        <video
          className="container-bg-video"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source src={df} type="video/mp4" />
        </video>

        <Box className="glass-card">
          <h1 className="title1">Welcome, Explorer ✈️🌍</h1>
          <p className="subtitle1">
            Discover breathtaking destinations and create unforgettable
            memories.
          </p>
        </Box>

        {/* <div className="plane" onClick={handlePlaneClick}>
          ✈️
        </div> */}
      </Box>

      <audio ref={audioRef} preload="auto">
        <source src={flySound} type="audio/mpeg" />
      </audio>

      {/* Cards Section */}
      <Box className="cards-section">
        <Box className="blog-content">
          <h2>Travel & Job Opportunities in One Place</h2>

          <p>
            Travel is not only about visiting new places — it is also about
            finding better opportunities for your future. We provide both tour
            services and job placement support to help you move forward with
            confidence.
          </p>

          <p>
            Through our platform, you can explore well-planned tour packages and
            also apply for job opportunities easily using our application form.
            We make the entire process simple, fast, and user-friendly for
            everyone.
          </p>

          <p>
            Our travel services include destination planning, ticket booking,
            visa guidance, and comfortable accommodation arrangements. We ensure
            that your journey is smooth, safe, and enjoyable from start to
            finish.
          </p>

          <p>
            At the same time, our job placement services are designed to connect
            skilled individuals with trusted companies. We carefully review your
            details and match you with opportunities that suit your experience
            and career goals.
          </p>

          <p>
            Whether you are planning a vacation, looking to work abroad, or
            exploring new career paths, we provide complete support at every
            stage. Our team is committed to guiding you with accurate
            information and reliable service.
          </p>

          <p>
            By filling out our form, you can quickly register your interest for
            job opportunities or travel services. This helps us understand your
            needs and provide the best possible solutions tailored to you.
          </p>

          <p>
            We believe in transparency, trust, and customer satisfaction. Our
            goal is to make both travel and job searching easier, faster, and
            more efficient.
          </p>

          <p>
            Start your journey today — explore new destinations, discover better
            job opportunities, and build a brighter future with us.
          </p>
        </Box>
        <Box className="destination-section">
          {destinations.map((item) => (
            <Box className="destination-card" key={item.id}>
              <img
                src={item.image}
                alt={item.title}
                className="destination-img"
              />
              <Box className="destination-content">
                <h3>{item.title}</h3>
                {/* <p>{item.location}</p> */}
                <span>{item.duration}</span>
                <Button variant="contained" className="explore-btn">
                  Explore
                </Button>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
}

export default Blog;
