import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import PrivateRoute from "./PrivateRoute";
import Blog from "../pages/Blog/Blog";
import ContactPage from "../pages/ContactPage/ContactPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
