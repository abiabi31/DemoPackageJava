import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./style.css";

const Header = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="fixed" className="fixed-header" elevation={0}>
      <Toolbar sx={{ justifyContent: "space-between", width: "100%" }}>
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
      </Toolbar>
    </AppBar>
  );
};

export default Header;
