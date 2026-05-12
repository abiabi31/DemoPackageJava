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
  Button,
} from "@mui/material";

import {
  FiMenu,
  FiLogOut,
  FiSettings,
  FiSun,
  FiMoon,
  FiHome,
  FiBook,
  FiSearch,
  FiBookmark,
} from "react-icons/fi";

import { FaBible } from "react-icons/fa";

import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useTheme as useAppTheme } from "../../context/ThemeContext";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const menuItems = [
  { path: "/dashboard", icon: FiHome, label: "Dashboard" },
  {
    path: "/dashboard/bibletype",
    icon: FaBible,
    label: "Bible",
  },
  { path: "/dashboard/reader", icon: FiBook, label: "Bible Reader" },
  { path: "/dashboard/search", icon: FiSearch, label: "Search" },
  { path: "/dashboard/bookmarks", icon: FiBookmark, label: "Bookmarks" },
];

const Navbar = ({ onMenuClick }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const user1 = useSelector((state) => state.user.data);

  console.log("Redux user:", user1);
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useAppTheme();

  const navigate = useNavigate();
  const location = useLocation();

  const muiTheme = useTheme();

  const isMobile = useMediaQuery(muiTheme.breakpoints.down("md"));

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
          {/* LEFT */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}
          >
            {/* MOBILE MENU BUTTON */}
            {isMobile && (
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
            )}

            {/* DESKTOP NAV ITEMS */}
            {!isMobile && (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                {menuItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = location.pathname === item.path;

                  return (
                    <Button
                      key={item.path}
                      onClick={() => navigate(item.path)}
                      startIcon={<Icon size={18} />}
                      sx={{
                        color: "white",
                        px: 2,
                        py: 1,
                        borderRadius: "12px",
                        textTransform: "none",
                        fontWeight: isActive ? 700 : 500,
                        background: isActive
                          ? "rgba(255,255,255,0.18)"
                          : "transparent",
                        border: isActive
                          ? "1px solid rgba(255,255,255,0.25)"
                          : "1px solid transparent",
                        transition: "0.3s ease",
                        "&:hover": {
                          background: "rgba(255,255,255,0.12)",
                        },
                      }}
                    >
                      {item.label}
                    </Button>
                  );
                })}
              </Box>
            )}
          </Box>

          {/* RIGHT */}
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
          <MenuItem
            disableGutters
            sx={{
              opacity: 1,
              py: 1,
            }}
          >
            <Typography
              variant="subtitle2"
              sx={{
                fontWeight: 700,
                color: theme === "dark" ? "white" : "black",
                letterSpacing: "0.3px",
                textShadow: "none",
                ml: 2,
              }}
            >
              {user1?.userId}
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

      <Toolbar />
    </>
  );
};

export default Navbar;
