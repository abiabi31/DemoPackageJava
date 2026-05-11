import {
  Box,
  Typography,
  Card,
  CardContent,
  Switch,
  FormControlLabel,
  Button,
  Divider,
  Grid,
} from "@mui/material";
import { motion } from "framer-motion";
import { FiMoon, FiSun, FiGlobe, FiRotateCcw, FiTrash2 } from "react-icons/fi";
import { useTheme } from "../../context/ThemeContext";
import { useTranslation } from "../../context/TranslationContext";
import { useBookmarks } from "../../context/BookmarkContext";
import { useRecentlyRead } from "../../context/RecentlyReadContext";
import { useAutoTranslation } from "../../hooks/useAutoTranslation";
import "./SettingsPage.css";

export const SettingsPage = () => {
  const { theme, toggleTheme } = useTheme();
  const { currentLanguage, changeLanguage, languages } = useTranslation();
  const { clearAllBookmarks, bookmarks } = useBookmarks();
  const { clearRecentlyRead, recentlyRead } = useRecentlyRead();
  const translate = useAutoTranslation();

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

  const handleResetSettings = () => {
    if (window.confirm(translate("Reset all settings to default?"))) {
      localStorage.clear();
      window.location.reload();
    }
  };

  return (
    <Box className="settings-page">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
          {translate("Settings")}
        </Typography>
        <Typography variant="body2" sx={{ opacity: 0.7, mb: 4 }}>
          {translate("Customize your Bible App experience")}
        </Typography>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="settings-container"
      >
        {/* Theme Settings */}
        <motion.div variants={item}>
          <Card
            sx={{
              background:
                "linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1))",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              borderRadius: "16px",
              mb: 3,
            }}
          >
            <CardContent>
              <Box
                sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}
              >
                {theme === "dark" ? <FiMoon size={24} /> : <FiSun size={24} />}
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  {translate("Theme")}
                </Typography>
              </Box>
              <Divider sx={{ my: 2 }} />
              <FormControlLabel
                control={
                  <Switch
                    checked={theme === "dark"}
                    onChange={toggleTheme}
                    size="medium"
                  />
                }
                label={translate(theme === "dark" ? "Dark Mode" : "Light Mode")}
              />
              <Typography variant="body2" sx={{ opacity: 0.7, mt: 1 }}>
                {translate("Toggle between light and dark theme")}
              </Typography>
            </CardContent>
          </Card>
        </motion.div>

        {/* Language Settings */}
        <motion.div variants={item}>
          <Card
            sx={{
              background:
                "linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1))",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              borderRadius: "16px",
              mb: 3,
            }}
          >
            <CardContent>
              <Box
                sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}
              >
                <FiGlobe size={24} />
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  {translate("Bible Language")}
                </Typography>
              </Box>
              <Divider sx={{ my: 2 }} />
              <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                <select
                  value={currentLanguage}
                  onChange={(e) => changeLanguage(e.target.value)}
                  style={{
                    padding: "10px 15px",
                    borderRadius: "8px",
                    border: "2px solid #667eea",
                    background: "transparent",
                    color: "inherit",
                    fontWeight: 500,
                    cursor: "pointer",
                  }}
                >
                  {languages.map((lang) => (
                    <option key={lang.code} value={lang.code}>
                      {lang.nativeName}
                    </option>
                  ))}
                </select>
              </Box>
              <Typography variant="body2" sx={{ opacity: 0.7, mt: 1 }}>
                {translate("Choose your preferred Bible language")}
              </Typography>
            </CardContent>
          </Card>
        </motion.div>

        {/* Data Management */}
        <motion.div variants={item}>
          <Card
            sx={{
              background:
                "linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1))",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              borderRadius: "16px",
              mb: 3,
            }}
          >
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                Data Management
              </Typography>
              <Divider sx={{ my: 2 }} />
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Card
                    sx={{
                      background: "rgba(102, 126, 234, 0.1)",
                      border: "1px solid rgba(102, 126, 234, 0.2)",
                      p: 2,
                    }}
                  >
                    <Typography
                      variant="subtitle2"
                      sx={{ fontWeight: 600, mb: 1 }}
                    >
                      {translate("Bookmarks")}
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.7, mb: 2 }}>
                      {bookmarks.length} {translate("saved verse(s)")}
                    </Typography>
                    <Button
                      variant="outlined"
                      color="error"
                      size="small"
                      fullWidth
                      onClick={() => {
                        if (window.confirm(translate("Clear all bookmarks?"))) {
                          clearAllBookmarks();
                        }
                      }}
                      disabled={bookmarks.length === 0}
                      startIcon={<FiTrash2 />}
                    >
                      {translate("Clear")}
                    </Button>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Card
                    sx={{
                      background: "rgba(102, 126, 234, 0.1)",
                      border: "1px solid rgba(102, 126, 234, 0.2)",
                      p: 2,
                    }}
                  >
                    <Typography
                      variant="subtitle2"
                      sx={{ fontWeight: 600, mb: 1 }}
                    >
                      {translate("Recently Read")}
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.7, mb: 2 }}>
                      {recentlyRead.length} {translate("verse(s)")}
                    </Typography>
                    <Button
                      variant="outlined"
                      color="error"
                      size="small"
                      fullWidth
                      onClick={() => {
                        if (
                          window.confirm(translate("Clear reading history?"))
                        ) {
                          clearRecentlyRead();
                        }
                      }}
                      disabled={recentlyRead.length === 0}
                      startIcon={<FiTrash2 />}
                    >
                      {translate("Clear")}
                    </Button>
                  </Card>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </motion.div>

        {/* Reset Settings */}
        <motion.div variants={item}>
          <Card
            sx={{
              background:
                "linear-gradient(135deg, rgba(220, 53, 69, 0.1), rgba(192, 0, 0, 0.1))",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(220, 53, 69, 0.2)",
              borderRadius: "16px",
            }}
          >
            <CardContent>
              <Box
                sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}
              >
                <FiRotateCcw size={24} style={{ color: "#dc3545" }} />
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  {translate("Reset Application")}
                </Typography>
              </Box>
              <Divider sx={{ my: 2 }} />
              <Typography variant="body2" sx={{ opacity: 0.7, mb: 2 }}>
                {translate(
                  "Reset all settings, bookmarks, and cache. This action cannot be undone.",
                )}
              </Typography>
              <Button
                variant="contained"
                color="error"
                fullWidth
                onClick={handleResetSettings}
                startIcon={<FiRotateCcw />}
              >
                {translate("Reset All Settings")}
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        {/* About */}
        <motion.div variants={item}>
          <Card
            sx={{
              background:
                "linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1))",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              borderRadius: "16px",
            }}
          >
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                {translate("About")}
              </Typography>
              <Divider sx={{ my: 2 }} />
              <Typography variant="body2" sx={{ opacity: 0.7, mb: 1 }}>
                <strong>{translate("Bible App v1.0.0")}</strong>
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.7 }}>
                {translate(
                  "A modern React-based Bible reader with powerful search, bookmarks, and audio features.",
                )}
              </Typography>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </Box>
  );
};

export default SettingsPage;
