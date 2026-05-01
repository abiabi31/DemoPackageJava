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
