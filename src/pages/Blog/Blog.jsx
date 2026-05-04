import { Box, Button } from "@mui/material";
import { useRef } from "react";

import df from "../../assets/img/df.mp4";
import "./style.css";
import flySound from "../../assets/img/fly.mp3";
import img1 from "../../assets/img/3.jpeg";
import img2 from "../../assets/img/1.jpeg";
import img3 from "../../assets/img/3.jpeg";
import img4 from "../../assets/img/7.jpeg";
import img5 from "../../assets/img/images.jpeg";

function Blog() {
  const audioRef = useRef(null);

  const destinations = [
    {
      id: "dest-1",
      title: "Alpine Peaks",
      location: "Switzerland",
      image: img4,
      duration: "7 days",
    },
    {
      id: "dest-2",
      title: "Forest Trails",
      location: "Canada",
      image: img1,
      duration: "5 days",
    },
    {
      id: "dest-3",
      title: "Coastal Sunrise",
      location: "Portugal",
      image: img5,
      duration: "4 days",
    },
    {
      id: "dest-4",
      title: "Desert Stars",
      location: "Morocco",
      image: img2,
      duration: "6 days",
    },
    {
      id: "dest-5",
      title: "Island Hopping",
      location: "Greece",
      image: img3,
      duration: "7 days",
    },
    {
      id: "dest-6",
      title: "Urban Escape",
      location: "Japan",
      image: img4,
      duration: "3 days",
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
        <video className="container-bg-video" autoPlay loop muted playsInline>
          <source src={df} type="video/mp4" />
        </video>

        <Box className="glass-card">
          <h1 className="title1">Welcome, Explorer ✈️🌍</h1>
          <p className="subtitle1">
            Discover breathtaking destinations and create unforgettable
            memories.
          </p>
        </Box>

        <div className="plane" onClick={handlePlaneClick}>
          ✈️
        </div>
      </Box>

      <audio ref={audioRef} preload="auto">
        <source src={flySound} type="audio/mpeg" />
      </audio>

      {/* Cards Section */}
      <Box className="cards-section">
        <Box className="blog-content">
          <h2>Discover Meaningful Travel Experiences</h2>

          <p>
            Travel is not just about visiting new places — it is about
            experiencing the world in a way that stays with you long after the
            journey ends. Each destination offers a unique blend of culture,
            landscape, and stories waiting to be explored.
          </p>

          <p>
            At our core, we focus on delivering thoughtfully curated travel
            experiences that go beyond the ordinary. From iconic landmarks to
            lesser-known destinations, we bring you closer to places that truly
            matter. Our goal is to help you travel smarter, deeper, and more
            meaningfully.
          </p>

          <p>
            Whether you are seeking relaxation, adventure, or cultural
            immersion, our insights are designed to guide you at every step. We
            provide practical travel advice, destination highlights, and
            real-world tips to ensure a seamless and enjoyable experience.
          </p>

          <p>
            We understand that every traveler is different. That’s why our
            content is crafted to suit a wide range of travel styles — from solo
            explorers to families and business travelers. Every journey deserves
            careful planning and the right inspiration.
          </p>

          <p>
            Through our platform, we aim to simplify travel decisions while
            enhancing the overall experience. With a focus on reliability,
            comfort, and authenticity, we help you make the most of every trip.
          </p>

          <p>
            Explore new destinations, gain fresh perspectives, and create
            lasting memories. Your journey begins with the right guidance — and
            we are here to provide it.
          </p>

          <p>
            Start planning today and experience travel the way it was meant to
            be.
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
                <p>{item.location}</p>
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
