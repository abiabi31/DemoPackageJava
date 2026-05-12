import { Routes, Route, Navigate } from "react-router-dom";

import DashboardPage from "../pages/dashboard/Dashboard";
// import HomePage from "../pages/HomePage/HomePage";
import SearchPage from "../pages/SearchPage/SearchPage";
import BookmarksPage from "../pages/BookmarksPage/BookmarksPage";
import PrivateRoute from "../routes/PrivateRoute";
import BibleReaderPage from "../pages/BibleReaderPage/BibleReaderPage";
import SettingsPage from "../utils/SettingsPage/SettingsPage";
import BibleType from "../pages/Bibletype/BibleType";
import SignupPage from "../pages/SignupPage/SignupPage";
import ForgotPasswordPage from "../pages/ForgotPasswordPage/ForgotPassword";
import LoginPage from "../pages/login/LoginPage";

const AppRoutes = () => {
  const isLoggedIn = !!localStorage.getItem("token");

  return (
    <Routes>
      {/* Default */}
      <Route
        path="/"
        element={<Navigate to={isLoggedIn ? "/dashboard" : "/login"} replace />}
      />
      <Route path="/signup" element={<SignupPage />} />

      {/* Public */}

      <Route path="/login" element={<LoginPage />} />
      {/* <Route path="/login" element={<LoginPage />} /> */}

      <Route path="/forgotPassword" element={<ForgotPasswordPage />} />
      {/* Protected - Dashboard */}
      <Route path="/dashboard" element={<PrivateRoute />}>
        <Route index element={<DashboardPage />} />
        <Route path="bibletype" element={<BibleType />} />
        <Route path="reader" element={<BibleReaderPage />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="bookmarks" element={<BookmarksPage />} />
        <Route path="settings" element={<SettingsPage />} />
      </Route>

      {/* Fallback */}
      {/* <Route
        path="*"
        element={<Navigate to={isLoggedIn ? "/dashboard" : "/login"} replace />}
      /> */}
    </Routes>
  );
};

export default AppRoutes;
