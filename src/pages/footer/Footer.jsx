import React from "react";
import { Box, Typography, Container, Tooltip } from "@mui/material";
import "./style.css";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <Box className="footer-container">
      <Container maxWidth="lg" className="footer-content">
        <Box className="footer-section">
          <Typography variant="h6" className="footer-title">
            About Us
          </Typography>
          <Typography variant="body2" className="footer-text">
            Building amazing web experiences with modern technologies.
          </Typography>
        </Box>

        <Box className="footer-section">
          <Typography variant="h6" className="footer-title">
            Quick Links
          </Typography>
          <Typography variant="body2" className="footer-link">
            <span onClick={() => window.scrollTo(0, 0)}>Home</span>
          </Typography>
          <Typography variant="body2" className="footer-link">
            <span
              onClick={() =>
                document
                  .getElementById("blogs-section")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Blogs
            </span>
          </Typography>
          <Typography variant="body2" className="footer-link">
            <span
              onClick={() =>
                document
                  .getElementById("contact-section")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Contact
            </span>
          </Typography>
        </Box>

        <Box className="footer-section">
          <Typography variant="h6" className="footer-title">
            Follow Us
          </Typography>
          <Box className="social-links">
            <span className="social-icon">🐦</span>
            <span className="social-icon">📘</span>
            <span className="social-icon">💼</span>
            <span className="social-icon">📧</span>
          </Box>
          <Tooltip title="Admin Login" arrow placement="bottom">
            <Typography
              className="admin-login"
              onClick={() => navigate("/login")}
            >
              Login
            </Typography>
          </Tooltip>
        </Box>
      </Container>

      <Box className="footer-bottom">
        <Typography variant="caption" className="footer-copyright">
          © 2026 MySite. All rights reserved. | Built with React & Modern Web
          Technologies
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
