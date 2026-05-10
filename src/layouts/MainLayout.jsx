import { Box, AppBar, Toolbar, IconButton, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";
import { FiMenu, FiBook, FiSearch, FiBookmark, FiSettings } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useAutoTranslation } from "../hooks/useAutoTranslation";
import "./MainLayout.css";

export const MainLayout = ({ children, onSidebarOpen, theme, onThemeToggle, showSidebar = true }) => {
  const muiTheme = useTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down("md"));
  const location = useLocation();
  const translate = useAutoTranslation();

  const navItems = [
    { path: "/", label: translate("Home"), icon: FiBook },
    { path: "/reader", label: translate("Reader"), icon: FiBook },
    { path: "/search", label: translate("Search"), icon: FiSearch },
    { path: "/bookmarks", label: translate("Bookmarks"), icon: FiBookmark },
    { path: "/settings", label: translate("Settings"), icon: FiSettings },
  ];

  return (
    <Box className="main-layout">
      {/* AppBar / Header */}
      <AppBar
        position="sticky"
        sx={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(10px)",
        }}
      >
        <Toolbar>
          {showSidebar && (
            <IconButton
              onClick={onSidebarOpen}
              sx={{ mr: 2, color: "white" }}
            >
              <FiMenu size={24} />
            </IconButton>
          )}

          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              color: "white",
              mr: 2,
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <FiBook size={24} /> {translate("Bible App")}
          </Typography>

          <Box sx={{ flexGrow: 1 }} />

          {/* Navigation for larger screens */}
          {!isMobile && (
            <Box sx={{ display: "flex", gap: 1 }}>
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <motion.div key={item.path} whileHover={{ scale: 1.05 }}>
                    <Link
                      to={item.path}
                      style={{ textDecoration: "none" }}
                    >
                      <IconButton
                        sx={{
                          color: isActive ? "#ffd700" : "white",
                          transition: "all 0.3s ease",
                          "&:hover": {
                            color: "#ffd700",
                          },
                        }}
                        title={item.label}
                      >
                        <Icon size={20} />
                      </IconButton>
                    </Link>
                  </motion.div>
                );
              })}
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flex: 1,
          overflow: "auto",
          background: theme === "dark"
            ? "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)"
            : "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
          minHeight: "calc(100vh - 64px)",
        }}
      >
        <Box className="layout-content">
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default MainLayout;
