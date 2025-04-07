// src/router/AppRouter.jsx
import { Routes, Route } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import AboutPage from "../pages/AboutPage/AboutPage";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/a-propos" element={<AboutPage />} />
    </Routes>
  );
}

export default AppRouter;
