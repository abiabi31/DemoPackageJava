import React from "react";
import { Box, Typography, Container, Tooltip } from "@mui/material";
import "./style.css";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <Box className="footer-container">
      <Container maxWidth="lg">
        {/* 🔥 FLEX ROW */}
        <Box className="footer-content">
          <Box className="footer-section">
            <Typography variant="h6">About Us</Typography>
            <Typography variant="body2">
              Founded in 2020, Halfway Manpower has been a trusted partner for
              businesses and professionals alike. Our mission is to provide
              exceptional recruitment and HR consulting services that drive
              growth and success{" "}
            </Typography>
          </Box>

          <Box className="footer-section">
            <Typography variant="h6">Quick Links</Typography>

            <Typography variant="body2">
              <span onClick={() => window.scrollTo(0, 0)}>Home</span>
            </Typography>

            <Typography variant="body2">
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

            <Typography variant="body2">
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
            <Typography variant="h6">Follow Us</Typography>
            <div class="contact-links">
              <a href="#">
                <i class="fas fa-home me-2"></i> Karungal
              </a>
              <a href="#">
                <i class="fas fa-envelope me-2"></i> halfwayconsultant@gmail.com
              </a>
              <a href="#">
                <i class="fas fa-phone me-2"></i> +91 9952687642
              </a>
            </div>
            <Box className="social-links">
              <span>🐦</span>
              <span>📘</span>
              <span>💼</span>
              <span>📧</span>
            </Box>

            {/* <Tooltip title="Admin Login" arrow placement="bottom">
              <Typography
                className="admin-login"
                onClick={() => navigate("/login")}
              >
                Login
              </Typography>
            </Tooltip> */}
          </Box>
        </Box>
      </Container>

      <Box className="footer-bottom">
        <Typography variant="caption">
          © 2026 MySite. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
