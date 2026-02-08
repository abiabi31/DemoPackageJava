import { Routes, Route } from "react-router-dom";
// import Login from "../pages/Login";
import HomePage from "../pages/home/HomePage";
// import Profile from "../pages/Profile";
// import MainLayout from "../layout/MainLayout";
import PrivateRoute from "./PrivateRoute";
import { lazy } from "react";
// const Login = lazy(() => import("./pages/Login"));

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public */}
      {/* <Route path="/login" element={<Login />} /> */}

      {/* Private */}
      <Route element={<PrivateRoute />}>
        {/* <Route element={<MainLayout />}> */}
        <Route path="/" element={<HomePage />} />

        {/* <Route path="/profile" element={<Profile />} /> */}
        {/* </Route> */}
      </Route>
    </Routes>
  );
};

export default AppRoutes;
