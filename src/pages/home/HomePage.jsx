import { Box } from "@mui/material";
import { CardMedia } from "@mui/material";
import img2 from "../../assets/img/download3.jpeg";
import img3 from "../../assets/img/download2.jpeg";
import img1 from "../../assets/img/images.jpeg";

import "./style.css";
import { useEffect, useState } from "react";
function HomePage() {
  const images = [img1, img2, img3];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(timer);
  }, []);
  return (
    <>
      <Box className="home-page">
        <Box>login</Box>
        <Box>login</Box>
      </Box>
      {/* <CardMedia
        component="video"
        src="/videos/sample.mp4"
        autoPlay
        muted
        loop
        controls
      /> */}
      <Box className="image-container">
        <img src={images[index]} alt="display" />
      </Box>
      <Box className="dots">
        {images.map((_, i) => (
          <span
            key={i}
            className={`dot ${index === i ? "active" : ""}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </Box>
    </>
  );
}

export default HomePage;
