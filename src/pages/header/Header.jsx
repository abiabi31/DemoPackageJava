import React, { useState, useRef, useEffect } from "react";
import { AppBar, Toolbar, Typography, Box, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./style.css";
import profileImg from "../../assets/img/newlogo.png";

const Header = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const cardRef = useRef();
  const [clicked, setClicked] = useState(false);
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(true);

    const msg = new SpeechSynthesisUtterance(
      "Welcome to Halfway Manpower Consultant. Your trusted partner in recruitment and workforce solutions.",
    );

    msg.rate = 1; // speed (0.5 - 2)
    msg.pitch = 1; // tone
    msg.volume = 1; // volume

    window.speechSynthesis.cancel(); // stop previous
    window.speechSynthesis.speak(msg);

    setTimeout(() => setActive(false), 1500);
  };
  // 👇 close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cardRef.current && !cardRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <AppBar position="fixed" className="fixed-header" elevation={0}>
      <Toolbar disableGutters>
        <Container
          maxWidth={false}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* LEFT SIDE (Logo + Title) */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              cursor: "pointer",
            }}
            onClick={() => navigate("/home")}
          >
            {/* <img
              src={profileImg}
              alt="Abi"
              style={{
                width: "80px",
                height: "80px",
                objectFit: "cover",
              }}
            /> */}
            <div className="profile-container">
              <img
                src={profileImg}
                alt="Abi"
                className={`profile-img ${clicked ? "clicked" : ""}`}
                onClick={() => {
                  setClicked(true);
                  setTimeout(() => setClicked(false), 1200);
                }}
              />

              {/* Name below */}
              {/* {clicked && <p className="profile-name">Abi 🎉</p>} */}

              {/* Confetti */}
              {clicked && (
                <div className="confetti">
                  {Array.from({ length: 50 }).map((_, i) => {
                    const angle = Math.random() * 2 * Math.PI;
                    const radius = Math.random() * 150 + 50;

                    const x = Math.cos(angle) * radius;
                    const y = Math.sin(angle) * radius;

                    const rotate = Math.random() * 720;
                    const delay = Math.random() * 0.4;
                    const duration = Math.random() * 1 + 1; // 1s–2s

                    return (
                      <span
                        key={i}
                        style={{
                          "--x": `${x}px`,
                          "--y": `${y}px`,
                          "--r": `${rotate}deg`,
                          "--d": `${duration}s`,
                          animationDelay: `${delay}s`,
                        }}
                      />
                    );
                  })}
                </div>
              )}
            </div>
            <div className="title-container">
              <Typography className="site-title" onClick={handleClick}>
                Halfway manpower consultant
              </Typography>

              {/* 🔥 Emoji Burst */}
              {active && (
                <div className="emoji-burst">
                  {["", "✨", "🎉", "💥"].map((e, i) => {
                    const x = Math.random() * 200 - 100;
                    const y = Math.random() * -150;

                    return (
                      <span
                        key={i}
                        style={{
                          "--x": `${x}px`,
                          "--y": `${y}px`,
                        }}
                      >
                        {e}
                      </span>
                    );
                  })}
                </div>
              )}
            </div>
          </Box>

          {/* RIGHT SIDE NAV */}
          <Box className="nav-links">
            <span className="nav-link" onClick={() => navigate("/home")}>
              Home
            </span>

            <span className="nav-link" onClick={() => setOpen((prev) => !prev)}>
              Services
            </span>

            {open && (
              <div className="service-card" ref={cardRef}>
                <div
                  className="service-item"
                  onClick={() => {
                    navigate("/blogs");
                    setOpen(false);
                  }}
                >
                  Blogs
                </div>
                <div
                  className="service-item"
                  onClick={() => {
                    // window.location.href = "/services";
                    navigate("/services");
                    setOpen(false);
                  }}
                >
                  Our Offerings{" "}
                </div>
              </div>
            )}

            <span className="nav-link" onClick={() => navigate("/contact")}>
              Contact
            </span>

            <span className="nav-link" onClick={() => navigate("/about")}>
              About
            </span>
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
