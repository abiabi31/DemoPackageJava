import { Box, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import img1 from "../../assets/img/3.jpeg";
import img2 from "../../assets/img/1.jpeg";
import img3 from "../../assets/img/3.jpeg";
import img4 from "../../assets/img/7.jpeg";
import img5 from "../../assets/img/images.jpeg";
import "./style.css";
import { useNavigate } from "react-router-dom";
import log from "../../assets/img/1.png";

import post from "../../assets/img/post.png";
import post1 from "../../assets/img/post1.png";
import post2 from "../../assets/img/post2.png";
import post3 from "../../assets/img/post3.png";
import post4 from "../../assets/img/post4.png";
import post5 from "../../assets/img/post5.png";
import post6 from "../../assets/img/post6.png";
import post7 from "../../assets/img/post7.png";
import post8 from "../../assets/img/post8.png";
import post9 from "../../assets/img/post9.png";
import post10 from "../../assets/img/post10.png";
import post11 from "../../assets/img/post11.png";
import post12 from "../../assets/img/post12.png";
import post13 from "../../assets/img/post13.png";
import post14 from "../../assets/img/post14.png";
import post15 from "../../assets/img/post15.png";
import post16 from "../../assets/img/post19.png";
import post17 from "../../assets/img/post17.png";
import post18 from "../../assets/img/post18.png";
import { IoClose } from "react-icons/io5";
function HomePage() {
  const navigate = useNavigate();
  const [selectedImg, setSelectedImg] = useState(null);
  const slides = [
    {
      id: "slide-nature",
      title: "Explore Nature",
      quote:
        "Travel makes one modest. You see what a tiny place you occupy in the world.",
      image: img1,
    },
    {
      id: "slide-mountains",
      title: "Mountain Escape",
      quote: "The mountains are calling and I must go.",
      image: img2,
    },
    {
      id: "slide-adventure",
      title: "Adventure Time",
      quote: "Life is either a daring adventure or nothing at all.",
      image: img3,
    },
    {
      id: "slide-beauty",
      title: "Discover Beauty",
      quote: "Wherever you go becomes a part of you somehow.",
      image: img4,
    },
    {
      id: "slide-journey",
      title: "Journey Begins",
      quote: "Adventure is worthwhile in itself.",
      image: img5,
    },
  ];

  const [index, setIndex] = useState(0);

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const destinations = [
    {
      id: "dest-1",

      image: post,
    },
    {
      id: "dest-2",

      image: post1,
    },
    {
      id: "dest-3",

      image: post2,
    },
    {
      id: "dest-4",

      image: post3,
    },
    {
      id: "dest-5",

      image: post4,
    },
    {
      id: "dest-6",

      image: post5,
    },
    {
      id: "dest-7",

      image: post6,
    },
    {
      id: "dest-8",

      image: post7,
    },
    {
      id: "dest-9",

      image: post8,
    },
    {
      id: "dest-10",

      image: post9,
    },
    {
      id: "dest-11",

      image: post10,
    },
    {
      id: "dest-12",

      image: post11,
    },
    {
      id: "dest-13",

      image: post12,
    },
    {
      id: "dest-14",

      image: post13,
    },
    {
      id: "dest-15",

      image: post14,
    },
    {
      id: "dest-16",

      image: post15,
    },
    {
      id: "dest-17",

      image: post16,
    },
    {
      id: "dest-18",

      image: post17,
    },
    {
      id: "dest-19",

      image: post18,
    },
  ];

  const travelTips = [
    {
      step: 1,
      title: "Pick a vibe",
      desc: "Choose nature, food, beaches, mountains, or culture.",
      icon: "🧭",
    },
    {
      step: 2,
      title: "Plan your days",
      desc: "Balance must-dos with downtime so it feels effortless.",
      icon: "🗓️",
    },
    {
      step: 3,
      title: "Pack smart",
      desc: "Bring layers, chargers, and comfortable shoes for long walks.",
      icon: "🎒",
    },
    {
      step: 4,
      title: "Book ahead",
      desc: "Secure flights and stays early to get better options and prices.",
      icon: "✈️",
    },
  ];

  const stories = [
    {
      id: "story-1",
      name: "Ava",
      quote: "Every trip taught me something new about myself.",
      image: img5,
    },
    {
      id: "story-2",
      name: "Noah",
      quote: "We thought it would be relaxing. It turned into an adventure!",
      image: img4,
    },
    {
      id: "story-3",
      name: "Mia",
      quote: "The best memories are the ones you make on the way.",
      image: img1,
    },
    {
      id: "story-4",
      name: "Ethan",
      quote: "New places, new perspectives, and zero regrets.",
      image: img2,
    },
  ];

  return (
    <div className="home-page">
      <Box
        id="slider-section"
        className="home-hero main-container"
        style={{
          backgroundImage: `url(${slides[index].image})`,
        }}
      >
        <Box className="overlay">
          <Box className="home-content content">
            <Typography variant="h3" className="title">
              {slides[index].title}
            </Typography>

            <Typography variant="h6" className="quote">
              {slides[index].quote}
            </Typography>
            <Button className="travel-btn" onClick={() => navigate("/blogs")}>
              Start Your Journey
            </Button>
          </Box>
        </Box>

        {/* Dots */}
        <Box className="dots">
          {slides.map((_, i) => (
            <span
              key={i}
              className={`dot ${index === i ? "active" : ""}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </Box>
      </Box>

      {/* Extra travel content */}
      <section className="home-section home-destinations">
        <Typography variant="h4" className="home-section-title">
          Popular Destinations
        </Typography>

        <div className="home-destination-grid">
          {destinations.map((d) => (
            <div key={d.id} className="home-destination-card">
              <img
                src={d.image}
                alt={d.title}
                className="card-img"
                onClick={() => setSelectedImg(d.image)} /* 🔥 click */
              />
              {/* <div className="home-destination-meta">
                <Typography variant="h6" className="home-destination-name">
                  {d.title}
                </Typography>
                <Typography className="home-destination-location">
                  {d.location} • {d.duration}
                </Typography>
              </div> */}
            </div>
          ))}
        </div>
      </section>
      {selectedImg && (
        <div className="image-modal">
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImg} className="image-modal-content" />

            <button
              className="modal-close"
              onClick={() => setSelectedImg(null)}
            >
              <IoClose />
              <span className="tooltip-text">Close</span>
            </button>
          </div>
        </div>
      )}
      <section className="home-section home-tips">
        <Typography variant="h4" className="home-section-title">
          Travel Planning Made Easy
        </Typography>

        <div className="home-tips-grid">
          {travelTips.map((t) => (
            <div key={t.step} className="home-tip-card">
              <div className="home-tip-icon">{t.icon}</div>
              <Typography variant="h6" className="home-tip-title">
                {t.step}. {t.title}
              </Typography>
              <Typography className="home-tip-desc">{t.desc}</Typography>
            </div>
          ))}
        </div>
      </section>

      <section className="home-section home-stories">
        <Typography variant="h4" className="home-section-title">
          Traveler Stories
        </Typography>

        <div className="home-stories-grid">
          {stories.map((s) => (
            <div key={s.id} className="home-story-card">
              <img src={s.image} alt={s.name} />
              <Typography variant="h6" className="home-story-name">
                {s.name}
              </Typography>
              <Typography className="home-story-quote">"{s.quote}"</Typography>
            </div>
          ))}
        </div>

        <div className="home-story-cta">
          <Button variant="contained" onClick={() => navigate("/blogs")}>
            Read More Travel Ideas
          </Button>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
