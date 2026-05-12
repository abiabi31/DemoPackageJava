import {
  ThemeProvider as MuiThemeProvider,
  CssBaseline,
  Box,
  Container,
} from "@mui/material";

import { createTheme } from "@mui/material/styles";
import { useLocation } from "react-router-dom";

import "./App.css";
import AppRoutes from "./routes/AppRoutes";

import { BibleProvider } from "./context/BibleContext";
import { BookmarkProvider } from "./context/BookmarkContext";
import { RecentlyReadProvider } from "./context/RecentlyReadContext";
import { AudioProvider } from "./context/AudioContext";

import { useTheme } from "./context/ThemeContext";

// import Navbar from "./layouts/SideBar/Navbar";
// import Sidebar from "./layouts/SideBar/Sidebar";

// ✅ IMAGE IMPORT
import bgImage from "./assets/img/back.png";
import Navbar from "./layouts/SideBar/Navbar";
const AppContent = () => {
  const { theme } = useTheme();
  const location = useLocation();

  const authPages = ["/login", "/signup", "/forgotPassword"];
  const isAuthPage = authPages.includes(location.pathname);

  const muiTheme = createTheme({
    palette: {
      mode: theme === "dark" ? "dark" : "light",
      primary: { main: "#667eea" },
      secondary: { main: "#764ba2" },
      background: {
        default: theme === "dark" ? "#0f0f1e" : "#f5f7fa",
        paper: theme === "dark" ? "#16213e" : "#ffffff",
      },
    },
    typography: {
      fontFamily:
        '"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell",sans-serif',
    },
  });

  return (
    <MuiThemeProvider theme={muiTheme}>
      <CssBaseline />

      {/* AUTH PAGES (LOGIN / SIGNUP) */}
      {isAuthPage ? (
        <Box
          sx={{
            width: "100%",
            minHeight: "100vh",
            position: "relative",
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* DARK OVERLAY */}
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8))",
            }}
          />

          {/* CONTENT */}
          <Box sx={{ position: "relative", zIndex: 2 }}>
            <AppRoutes />
          </Box>
        </Box>
      ) : (
        /* DASHBOARD */
        <Box
          sx={{
            display: "flex",
            width: "100%",
            minHeight: "100vh",
            overflowX: "hidden",
            background: theme === "dark" ? "#0f0f1e" : "#f5f7fa",
          }}
        >
          {/* <Sidebar /> */}

          <Box
            component="main"
            sx={{
              flexGrow: 1,
              minHeight: "100vh",
              transition: "0.3s ease",
            }}
          >
            <Container
              maxWidth={false}
              disableGutters
              sx={{
                px: { xs: 2, md: 3 },
                py: 2,
              }}
            >
              <AppRoutes />
            </Container>
          </Box>
        </Box>
      )}
    </MuiThemeProvider>
  );
};

function App() {
  const location = useLocation();
  const authPages = ["/login", "/signup", "/forgotPassword"];
  const isAuthPage = authPages.includes(location.pathname);

  return (
    <div className="app-shell">
      <BibleProvider>
        <BookmarkProvider>
          <RecentlyReadProvider>
            <AudioProvider>
              {!isAuthPage && <Navbar />}
              <AppContent />
            </AudioProvider>
          </RecentlyReadProvider>
        </BookmarkProvider>
      </BibleProvider>
    </div>
  );
}

export default App;
