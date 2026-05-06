import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import PrivateRoute from "./PrivateRoute";
import Blog from "../pages/Blog/Blog";
import ContactPage from "../pages/ContactPage/ContactPage";
import AboutPage from "../pages/aboutme/about";
import LoginPage from "../login/login";
import AdminPage from "../pages/admin/AdminPage";
import Services from "../pages/ServicesPage/Services";

const AppRoutes = () => {
  return (
    <Routes>
      {/* ✅ Public Route */}
      <Route path="/login" element={<LoginPage />} />

      <Route element={<PrivateRoute />}>
        <Route path="/" element={<Navigate to="/home" replace />} />

        <Route path="/home" element={<HomePage />} />
        <Route path="/Admin" element={<AdminPage />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
