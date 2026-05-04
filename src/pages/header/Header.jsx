import React, { useState, useRef, useEffect } from "react";
import { AppBar, Toolbar, Typography, Box, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./style.css";
import profileImg from "../../assets/img/newlogo.png";

const Header = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const cardRef = useRef();

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
            <img
              src={profileImg}
              alt="Abi"
              style={{
                width: "80px",
                height: "80px",
                objectFit: "cover",
              }}
            />

            <Typography className="site-title">
              Halfway manpower consultant
            </Typography>
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
