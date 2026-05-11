import {
  Box,
  Container,
  Grid,
  Card,
  Typography,
  Button,
  Paper,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { useState } from "react";
import { FiActivity, FiBook, FiTrendingUp, FiUsers } from "react-icons/fi";
import { motion } from "framer-motion";
import { useAuth } from "../../context/AuthContext";
import { useTheme as useAppTheme } from "../../context/ThemeContext";
import "./Dashboard.css";

const StatCard = ({ icon: Icon, title, value, color, theme }) => (
  <motion.div
    whileHover={{ translateY: -8 }}
    transition={{
      type: "spring",
      stiffness: 300,
    }}
  >
    <Card
      sx={{
        background:
          theme === "dark"
            ? "linear-gradient(135deg, rgba(102,126,234,0.1) 0%, rgba(118,75,162,0.1) 100%)"
            : "linear-gradient(135deg, rgba(102,126,234,0.08) 0%, rgba(118,75,162,0.08) 100%)",

        border: `1px solid ${
          theme === "dark" ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"
        }`,

        backdropFilter: "blur(10px)",

        p: 3,

        display: "flex",
        flexDirection: "column",
        gap: 2,

        height: "100%",

        transition: "0.3s ease",

        "&:hover": {
          boxShadow: `0 12px 32px ${color}40`,
          border: `1px solid ${color}80`,
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          variant="subtitle2"
          sx={{
            fontWeight: 600,
            textTransform: "uppercase",
            color:
              theme === "dark" ? "rgba(255,255,255,0.7)" : "rgba(0,0,0,0.6)",
          }}
        >
          {title}
        </Typography>

        <Box
          sx={{
            p: 1.5,
            borderRadius: "12px",
            background: `${color}20`,
          }}
        >
          <Icon size={22} color={color} />
        </Box>
      </Box>

      <Typography
        variant="h4"
        sx={{
          fontWeight: 700,
          color: theme === "dark" ? "#fff" : "#000",
        }}
      >
        {value}
      </Typography>

      <Typography
        variant="caption"
        sx={{
          color,
          fontWeight: 600,
        }}
      >
        ↗ 12% increase
      </Typography>
    </Card>
  </motion.div>
);

const DashboardPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const { user } = useAuth();

  const { theme } = useAppTheme();

  const muiTheme = useTheme();

  const isMobile = useMediaQuery(muiTheme.breakpoints.down("md"));

  const statsData = [
    {
      icon: FiBook,
      title: "Books Read",
      value: "24",
      color: "#667eea",
    },
    {
      icon: FiActivity,
      title: "Verses Bookmarked",
      value: "157",
      color: "#f093fb",
    },
    {
      icon: FiTrendingUp,
      title: "Chapters Completed",
      value: "89",
      color: "#4facfe",
    },
    {
      icon: FiUsers,
      title: "Reading Streak",
      value: "12 days",
      color: "#fa709a",
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",

        background: theme === "dark" ? "#0f0f1e" : "#f8f9fa",

        overflowX: "hidden",
      }}
    >
      {/* CONTENT */}
      <Box
        sx={{
          width: "100%",

          overflowY: "auto",

          background:
            theme === "dark"
              ? "linear-gradient(135deg,#0f0f1e 0%,#1a1a2e 100%)"
              : "linear-gradient(135deg,#f8f9fa 0%,#e9ecef 100%)",

          "&::-webkit-scrollbar": {
            width: "8px",
          },

          "&::-webkit-scrollbar-thumb": {
            background:
              theme === "dark" ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.1)",

            borderRadius: "20px",
          },
        }}
      >
        {/* FULL WIDTH CONTAINER */}
        <Container
          maxWidth={false}
          disableGutters
          sx={{
            width: "100%",

            py: {
              xs: 2,
              sm: 3,
              md: 4,
            },

            px: {
              xs: 2,
              sm: 3,
              md: 4,
            },
          }}
        >
          {/* WELCOME */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
            }}
          >
            <Box sx={{ mb: 4 }}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,

                  color: theme === "dark" ? "#fff" : "#000",

                  mb: 1,
                }}
              >
                Welcome back, {user?.username}! 👋
              </Typography>

              <Typography
                variant="subtitle1"
                sx={{
                  color:
                    theme === "dark"
                      ? "rgba(255,255,255,0.7)"
                      : "rgba(0,0,0,0.6)",
                }}
              >
                Here's your reading dashboard for today.
              </Typography>
            </Box>
          </motion.div>

          {/* STATS */}
          <Grid
            container
            spacing={{
              xs: 2,
              md: 3,
            }}
            sx={{ mb: 4 }}
          >
            {statsData.map((stat, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <StatCard
                  icon={stat.icon}
                  title={stat.title}
                  value={stat.value}
                  color={stat.color}
                  theme={theme}
                />
              </Grid>
            ))}
          </Grid>

          {/* MAIN CARDS */}
          <Grid
            container
            spacing={{
              xs: 2,
              md: 3,
            }}
          >
            {/* RECENT */}
            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  p: 3,
                  height: "100%",

                  background:
                    theme === "dark" ? "rgba(255,255,255,0.05)" : "#fff",

                  border: `1px solid ${
                    theme === "dark"
                      ? "rgba(255,255,255,0.1)"
                      : "rgba(0,0,0,0.08)"
                  }`,
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    mb: 3,
                  }}
                >
                  Recently Read
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                  }}
                >
                  {["Genesis 1:1-5", "Psalm 23:1-6", "John 3:16-18"].map(
                    (item) => (
                      <Paper
                        key={item}
                        sx={{
                          p: 2,

                          cursor: "pointer",

                          transition: "0.3s",

                          "&:hover": {
                            transform: "translateX(4px)",
                          },
                        }}
                      >
                        <Typography>{item}</Typography>
                      </Paper>
                    ),
                  )}
                </Box>
              </Card>
            </Grid>

            {/* ACTIONS */}
            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  p: 3,
                  height: "100%",

                  background:
                    theme === "dark" ? "rgba(255,255,255,0.05)" : "#fff",

                  border: `1px solid ${
                    theme === "dark"
                      ? "rgba(255,255,255,0.1)"
                      : "rgba(0,0,0,0.08)"
                  }`,
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    mb: 3,
                  }}
                >
                  Quick Actions
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                  }}
                >
                  <Button
                    fullWidth
                    variant="contained"
                    sx={{
                      py: 1.5,

                      borderRadius: "12px",

                      background:
                        "linear-gradient(135deg,#667eea 0%,#764ba2 100%)",
                    }}
                  >
                    Continue Reading
                  </Button>

                  <Button
                    fullWidth
                    variant="outlined"
                    sx={{
                      py: 1.5,
                      borderRadius: "12px",
                    }}
                  >
                    Explore Books
                  </Button>

                  <Button
                    fullWidth
                    variant="outlined"
                    sx={{
                      py: 1.5,
                      borderRadius: "12px",
                    }}
                  >
                    View Bookmarks
                  </Button>
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default DashboardPage;
