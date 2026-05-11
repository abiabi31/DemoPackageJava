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

import Navbar from "./layouts/SideBar/Navbar";
import Sidebar from "./layouts/SideBar/Sidebar";

const AppContent = () => {
  const { theme } = useTheme();

  const location = useLocation();

  // AUTH PAGES
  const authPages = ["/login", "/signup", "/forgotPassword"];

  const isAuthPage = authPages.includes(location.pathname);

  const muiTheme = createTheme({
    palette: {
      mode: theme === "dark" ? "dark" : "light",

      primary: {
        main: "#667eea",
      },

      secondary: {
        main: "#764ba2",
      },

      background: {
        default: theme === "dark" ? "#0f0f1e" : "#f5f7fa",

        paper: theme === "dark" ? "#16213e" : "#ffffff",
      },
    },

    typography: {
      fontFamily:
        '"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell",sans-serif',
    },

    components: {
      MuiToolbar: {
        styleOverrides: {
          root: {
            minHeight: "0px !important",

            "@media (min-width:600px)": {
              minHeight: "0px !important",
            },
          },
        },
      },
    },
  });

  return (
    <MuiThemeProvider theme={muiTheme}>
      <CssBaseline />

      {/* LOGIN + SIGNUP PAGE */}
      {isAuthPage ? (
        <Box
          sx={{
            width: "100%",
            minHeight: "100vh",
            background: theme === "dark" ? "#0f0f1e" : "#f5f7fa",
          }}
        >
          <AppRoutes />
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
          {/* SIDEBAR */}
          <Sidebar />

          {/* MAIN */}
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              width: "100%",
              minHeight: "100vh",
              overflowX: "hidden",
              transition: "0.3s ease",
            }}
          >
            {/* PAGE CONTENT */}
            <Container
              maxWidth={false}
              disableGutters
              sx={{
                width: "100%",
                px: {
                  xs: 2,
                  md: 3,
                },
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

  // AUTH PAGES
  const authPages = ["/login", "/signup", "/forgotPassword"];

  const isAuthPage = authPages.includes(location.pathname);

  return (
    <div className="app-shell">
      <BibleProvider>
        <BookmarkProvider>
          <RecentlyReadProvider>
            <AudioProvider>
              {/* HIDE NAVBAR IN LOGIN + SIGNUP */}
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
