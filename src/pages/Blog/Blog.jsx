import { Box, Button } from "@mui/material";
import { useEffect, useRef } from "react";

import df from "../../assets/img/df.mp4";
import "./style.css";
import HTMLFlipBook from "react-pageflip";
import flySound from "../../assets/img/fly.mp3";

function Blog() {
  const audioRef = useRef(null);

  // const handlePlaneClick = () => {
  //   const audio = audioRef.current;
  //   if (!audio) return;

  //   audio.pause();
  //   audio.currentTime = 0;
  //   audio.volume = 0.6;
  //   audio.play().catch(() => {});
  // };

  // useEffect(() => {
  //   const audio = audioRef.current;
  //   if (!audio) return;

  //   audio.volume = 0.6;
  //   audio.play().catch(() => {
  //     // If blocked, wait for first user click
  //     const unlockAudio = () => {
  //       playAudio();
  //       window.removeEventListener("click", unlockAudio);
  //     };
  //     window.addEventListener("click", unlockAudio);
  //   });
  // }, []);

  // 🔥 Plane Click Play
  const handlePlaneClick = (e) => {
    e.stopPropagation();

    const audio = audioRef.current;
    if (!audio) return;

    audio.pause(); // stop if already playing
    audio.currentTime = 0; // restart
    audio.volume = 0.6;

    audio.play().catch((err) => {
      console.log("Play error:", err);
    });
  };

  return (
    <Box className="book-container">
      {/* Background Video */}
      <video className="container-bg-video" autoPlay loop muted playsInline>
        <source src={df} type="video/mp4" />
      </video>

      {/* Glass Card */}
      <Box className="glass-card">
        <h1 className="title1">Welcome, Explorer ✈️🌍</h1>
        <p className="subtitle1">
          Discover breathtaking destinations and create unforgettable memories.
        </p>
      </Box>
      {/* Flip Book */}

      <div className="plane" onClick={handlePlaneClick}>
        ✈️
      </div>
      <audio ref={audioRef} preload="auto">
        <source src={flySound} type="audio/mpeg" />
      </audio>
    </Box>
  );
}

export default Blog;
