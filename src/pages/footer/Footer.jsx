import React from "react";
import { Box, Typography, Container } from "@mui/material";
import "./style.css";

const Footer = () => {
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
