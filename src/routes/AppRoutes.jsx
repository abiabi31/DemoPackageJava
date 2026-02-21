import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import PrivateRoute from "./PrivateRoute";
import Blog from "../pages/Blog/Blog";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/blogs" element={<Blog />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
