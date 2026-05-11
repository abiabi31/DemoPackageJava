import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Menu,
  MenuItem,
  Avatar,
  Divider,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { FiMenu, FiLogOut, FiSettings, FiSun, FiMoon } from "react-icons/fi";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useTheme as useAppTheme } from "../../context/ThemeContext";
import { useNavigate } from "react-router-dom";

const Navbar = ({ onMenuClick }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useAppTheme();

  const navigate = useNavigate();

  const muiTheme = useTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down("sm"));

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleMenuClose();
    logout();
    navigate("/login", { replace: true });
  };

  const getInitials = (username) => {
    return username
      .split(" ")
      .map((name) => name[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <>
      {/* FIXED NAVBAR */}
      <AppBar
        position="fixed"
        sx={{
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1300,
          background:
            theme === "dark"
              ? "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)"
              : "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          boxShadow: "0 2px 12px rgba(0,0,0,0.15)",
          backdropFilter: "blur(10px)",
          transition: "all 0.3s ease",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            minHeight: "64px",
            px: { xs: 1, sm: 2 },
          }}
        >
          {/* LEFT SIDE */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <IconButton
              onClick={onMenuClick}
              sx={{
                color: "white",
                "&:hover": {
                  background: "rgba(255,255,255,0.1)",
                },
              }}
            >
              <FiMenu size={24} />
            </IconButton>

            {/* <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                color: "white",
                fontSize: { xs: "1rem", sm: "1.2rem" },
                letterSpacing: "0.5px",
              }}
            >
              Dashboard
            </Typography> */}
          </Box>

          {/* RIGHT SIDE */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            {/* THEME BUTTON */}
            <IconButton
              onClick={toggleTheme}
              sx={{
                color: "white",
                "&:hover": {
                  background: "rgba(255,255,255,0.1)",
                },
              }}
            >
              {theme === "dark" ? <FiSun size={20} /> : <FiMoon size={20} />}
            </IconButton>

            {/* PROFILE */}
            <IconButton
              onClick={handleMenuOpen}
              sx={{
                p: 0,
                ml: 1,
              }}
            >
              <Avatar
                sx={{
                  width: 36,
                  height: 36,
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  background:
                    theme === "dark"
                      ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
                      : "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
                }}
              >
                {getInitials(user?.username || "U")}
              </Avatar>
            </IconButton>
          </Box>
        </Toolbar>

        {/* PROFILE MENU */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          PaperProps={{
            sx: {
              minWidth: "220px",
              borderRadius: "14px",
              mt: 1,
              background:
                theme === "dark"
                  ? "linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)"
                  : "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.15)",
              boxShadow: "0 8px 30px rgba(0,0,0,0.2)",
            },
          }}
        >
          {/* USERNAME */}
          <MenuItem disabled>
            <Typography
              variant="subtitle2"
              sx={{
                fontWeight: 700,
                color: theme === "dark" ? "white" : "black",
              }}
            >
              {user?.username}
            </Typography>
          </MenuItem>

          <Divider sx={{ opacity: 0.2 }} />

          {/* SETTINGS */}
          <MenuItem
            onClick={() => {
              handleMenuClose();
              navigate("/dashboard/settings");
            }}
            sx={{
              color: theme === "dark" ? "white" : "black",
            }}
          >
            <FiSettings size={18} style={{ marginRight: "10px" }} />
            Settings
          </MenuItem>

          <Divider sx={{ opacity: 0.2 }} />

          {/* LOGOUT */}
          <MenuItem
            onClick={handleLogout}
            sx={{
              color: "#ff6b6b",
            }}
          >
            <FiLogOut size={18} style={{ marginRight: "10px" }} />
            Logout
          </MenuItem>
        </Menu>
      </AppBar>

      {/* PAGE TOP SPACE */}
      <Toolbar />
    </>
  );
};

export default Navbar;
