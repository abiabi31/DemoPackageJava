import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "../pages/login/login";
import DashboardPage from "../pages/dashboard/Dashboard";
import PrivateRoute from "../routes/PrivateRoute";

const AppRoutes = () => {
  const isLoggedIn = !!localStorage.getItem("token");

  return (
    <Routes>
      {/* Default */}
      <Route
        path="/"
        element={<Navigate to={isLoggedIn ? "/dashboard" : "/login"} replace />}
      />

      {/* Public */}
      <Route path="/login" element={<LoginPage />} />

      {/* Protected */}
      <Route path="/dashboard" element={<PrivateRoute />}>
        <Route index element={<DashboardPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
