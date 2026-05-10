import {
  Box,
  Typography,
  Grid,
  Button,
  Card,
  CardContent,
} from "@mui/material";
import { motion } from "framer-motion";
import {
  FiBook,
  FiSearch,
  FiBookmark,
  FiVolume2,
  FiSettings,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useAutoTranslation } from "../hooks/useAutoTranslation";
import "./HomePage.css";

export const HomePage = () => {
  const navigate = useNavigate();
  const translate = useAutoTranslation();

  const features = [
    {
      icon: FiBook,
      title: translate("Read Bible"),
      description: translate("Explore all books and chapters of the Bible"),
      path: "/reader",
    },
    {
      icon: FiSearch,
      title: translate("Search"),
      description: translate("Find verses by keyword or book name"),
      path: "/search",
    },
    {
      icon: FiBookmark,
      title: translate("Bookmarks"),
      description: translate("Save your favorite verses"),
      path: "/bookmarks",
    },
    {
      icon: FiVolume2,
      title: translate("Audio"),
      description: translate("Listen to Bible chapters"),
      path: "/reader",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <Box className="home-page">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="hero-section"
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: 700,
            mb: 2,
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {translate("Holy Bible Reader")}
        </Typography>
        <Typography
          variant="h5"
          sx={{
            opacity: 0.8,
            mb: 3,
            maxWidth: "500px",
            mx: "auto",
          }}
        >
          {translate(
            "Read, search, bookmark, and listen to the Bible in multiple languages with a modern, beautiful interface.",
          )}
        </Typography>
        <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="contained"
              size="large"
              onClick={() => navigate("/reader")}
              sx={{
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                color: "white",
                fontWeight: 600,
                px: 4,
                py: 1.5,
                borderRadius: "12px",
                textTransform: "none",
                fontSize: "16px",
              }}
            >
              {translate("Start Reading")}
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outlined"
              size="large"
              onClick={() => navigate("/search")}
              sx={{
                borderColor: "#667eea",
                color: "#667eea",
                fontWeight: 600,
                px: 4,
                py: 1.5,
                borderRadius: "12px",
                textTransform: "none",
                fontSize: "16px",
              }}
            >
              {translate("Search Verses")}
            </Button>
          </motion.div>
        </Box>
      </motion.div>

      {/* Features Section */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="features-section"
      >
        <Typography
          variant="h4"
          sx={{ fontWeight: 700, mb: 4, textAlign: "center" }}
        >
          {translate("Features")}
        </Typography>
        <Grid container spacing={3}>
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <motion.div
                  variants={item}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => navigate(feature.path)}
                >
                  <Card
                    sx={{
                      height: "100%",
                      cursor: "pointer",
                      background:
                        "linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1))",
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                      borderRadius: "16px",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        background:
                          "linear-gradient(135deg, rgba(102, 126, 234, 0.15), rgba(118, 75, 162, 0.15))",
                        border: "1px solid rgba(255, 255, 255, 0.3)",
                        boxShadow: "0 8px 32px rgba(102, 126, 234, 0.2)",
                        transform: "translateY(-8px)",
                      },
                    }}
                  >
                    <CardContent sx={{ textAlign: "center" }}>
                      <Box sx={{ mb: 2, opacity: 0.7, fontSize: 40 }}>
                        <Icon />
                      </Box>
                      <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                        {feature.title}
                      </Typography>
                      <Typography variant="body2" sx={{ opacity: 0.7 }}>
                        {feature.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            );
          })}
        </Grid>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="cta-section"
      >
        <Card
          sx={{
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            color: "white",
            p: 4,
            borderRadius: "16px",
            textAlign: "center",
            mt: 4,
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
            {translate("Ready to explore God's Word?")}
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, opacity: 0.9 }}>
            {translate(
              "Access the complete Bible with powerful search, bookmarks, and audio features.",
            )}
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate("/reader")}
            sx={{
              background: "white",
              color: "#667eea",
              fontWeight: 600,
              px: 4,
              py: 1.2,
              borderRadius: "12px",
              textTransform: "none",
              fontSize: "16px",
              "&:hover": {
                background: "rgba(255, 255, 255, 0.9)",
              },
            }}
          >
            {translate("Open Bible Reader")}
          </Button>
        </Card>
      </motion.div>
    </Box>
  );
};

export default HomePage;
