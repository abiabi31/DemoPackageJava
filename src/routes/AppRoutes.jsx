import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import PalayaYaripadi from "../pages/PalayaYaripadi";
import PuthiyaYaripadi from "../pages/PuthiyaYaripadi";
import DashboardLayout from "../layouts/DashboardLayout";
import PrivateRoute from "./PrivateRoute";

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
      <Route path="/login" element={<Login />} />

      {/* Protected */}
      <Route path="/" element={<PrivateRoute />}>
        <Route
          path="/dashboard"
          element={
            <DashboardLayout>
              <Dashboard />
            </DashboardLayout>
          }
        />
        <Route
          path="/palaya-yaripadi"
          element={
            <DashboardLayout>
              <PalayaYaripadi />
            </DashboardLayout>
          }
        />
        <Route
          path="/puthiya-yaripadi"
          element={
            <DashboardLayout>
              <PuthiyaYaripadi />
            </DashboardLayout>
          }
        />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
