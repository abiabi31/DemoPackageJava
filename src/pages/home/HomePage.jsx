import { Box, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import img1 from "../../assets/img/3.jpeg";
import img2 from "../../assets/img/1.jpeg";
import img3 from "../../assets/img/3.jpeg";
import img4 from "../../assets/img/7.jpeg";
import img5 from "../../assets/img/images.jpeg";
import "./style.css";
import HTMLFlipBook from "react-pageflip";
import Header from "../header/Header.jsx";
import Blog from "../Blog/Blog.jsx";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();
  const pages = [
    {
      title: "Explore Nature",
      quote:
        "Travel makes one modest. You see what a tiny place you occupy in the world.",
      image: img1,
    },
    {
      title: "Mountain Escape",
      quote: "The mountains are calling and I must go.",
      image: img2,
    },
    {
      title: "Adventure Time",
      quote: "Life is either a daring adventure or nothing at all.",
      image: img3,
    },
    {
      title: "Discover Beauty",
      quote: "Wherever you go becomes a part of you somehow.",
      image: img4,
    },
    {
      title: "Journey Begins",
      quote: "Adventure is worthwhile in itself.",
      image: img5,
    },
  ];

  const [index, setIndex] = useState(0);

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % pages.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [pages.length]);

  return (
    <>
      <Header />
      <Box
        id="slider-section"
        className="main-container"
        style={{
          backgroundImage: `url(${pages[index].image})`,
        }}
      >
        <Box key={index} className="overlay">
          <Box className="content">
            <Typography variant="h3" className="title">
              {pages[index].title}
            </Typography>

            <Typography variant="h6" className="quote">
              {pages[index].quote}
            </Typography>
            <Button className="travel-btn" onClick={() => navigate("/blogs")}>
              Start Your Journey
            </Button>
          </Box>
        </Box>

        {/* Dots */}
        <Box className="dots">
          {pages.map((_, i) => (
            <span
              key={i}
              className={`dot ${index === i ? "active" : ""}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </Box>
      </Box>
    </>
  );
}

export default HomePage;
