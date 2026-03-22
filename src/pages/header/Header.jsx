import React from "react";
import { AppBar, Toolbar, Typography, Box, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./style.css";

const Header = () => {
  const navigate = useNavigate();

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
          <Typography className="site-title" onClick={() => navigate("/home")}>
            MySite
          </Typography>

          <Box className="nav-links">
            <span className="nav-link" onClick={() => navigate("/home")}>
              Home
            </span>
            <span className="nav-link" onClick={() => navigate("/blogs")}>
              Blogs
            </span>
            <span className="nav-link" onClick={() => navigate("/contact")}>
              Contact
            </span>
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
