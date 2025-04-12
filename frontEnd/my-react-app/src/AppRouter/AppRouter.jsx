// src/router/AppRouter.jsx
import { Routes, Route } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import AboutPage from "../pages/AboutPage/AboutPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/a-propos" element={<AboutPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default AppRouter;
