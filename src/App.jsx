import { useState } from "react";
import { ThemeProvider as MuiThemeProvider, CssBaseline } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import "./App.css";
import BibleRoutes from "./routes/BibleRoutes";
import MainLayout from "./layouts/MainLayout";
import Sidebar from "./components/Common/Sidebar";
import { BibleProvider } from "./context/BibleContext";
import { BookmarkProvider } from "./context/BookmarkContext";
import { RecentlyReadProvider } from "./context/RecentlyReadContext";
import { AudioProvider } from "./context/AudioContext";
import { useTheme } from "./context/ThemeContext";
import { useBible } from "./context/BibleContext";

const BibleAppContent = () => {
  const { theme, toggleTheme } = useTheme();
  const { books, selectBook } = useBible();
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
        default: theme === "dark" ? "#1a1a2e" : "#f5f7fa",
        paper: theme === "dark" ? "#16213e" : "#ffffff",
      },
    },
    typography: {
      fontFamily:
        '"Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
      h1: { fontWeight: 700 },
      h2: { fontWeight: 700 },
      h3: { fontWeight: 700 },
      h4: { fontWeight: 700 },
      h5: { fontWeight: 700 },
      h6: { fontWeight: 700 },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "none",
            borderRadius: "8px",
            fontWeight: 600,
            transition: "all 0.3s ease",
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            transition: "all 0.3s ease",
          },
        },
      },
    },
  });

  return (
    <MuiThemeProvider theme={muiTheme}>
      <CssBaseline />
      <MainLayout
        theme={theme}
        onThemeToggle={toggleTheme}
        onSidebarOpen={() => setSidebarOpen(true)}
        showSidebar={true}
      >
        <BibleRoutes />
      </MainLayout>
      <Sidebar
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        books={books}
        onSelectBook={selectBook}
      />
    </MuiThemeProvider>
  );
};

function App() {
  return (
    <div className="app-shell">
      <BibleProvider>
        <BookmarkProvider>
          <RecentlyReadProvider>
            <AudioProvider>
              <BibleAppContent />
            </AudioProvider>
          </RecentlyReadProvider>
        </BookmarkProvider>
      </BibleProvider>
    </div>
  );
}

export default App;
