import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import Blog from "../pages/Blog/Blog";
import ContactPage from "../pages/ContactPage/ContactPage";
import AboutPage from "../pages/aboutme/about";
import LoginPage from "../login/login";
import AdminPage from "../pages/admin/AdminPage";
import Services from "../pages/ServicesPage/Services";
import PrivateRoute from "./PrivateRoute";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Default */}
      <Route path="/" element={<Navigate to="/home" replace />} />

      {/* ✅ PUBLIC ROUTES */}
      <Route path="/home" element={<HomePage />} />
      <Route path="/services" element={<Services />} />
      <Route path="/blogs" element={<Blog />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/login" element={<LoginPage />} />

      {/* 🔒 PROTECTED ROUTE */}
      <Route element={<PrivateRoute />}>
        <Route path="/admin" element={<AdminPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
