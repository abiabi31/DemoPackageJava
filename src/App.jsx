import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { ThemeProvider } from "./context/ThemeContext";
import { TranslationProvider } from "./context/TranslationContext";
import AppRoutes from "./routes/AppRoutes";
import "./App.css";

function App() {
  return (
    <Router>
      <ThemeProvider>
        <TranslationProvider>
          <AuthProvider>
            <AppRoutes />
          </AuthProvider>
        </TranslationProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
