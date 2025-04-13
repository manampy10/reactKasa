// src/router/AppRouter.jsx
import { Routes, Route } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import AboutPage from "../pages/AboutPage/AboutPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import PropertyPageCarroussel from "../pages/PropertyPageCarrousel/PropertyPageCarrousel";
import Layout from "../components/Layout/Layout";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="logement/:id" element={<PropertyPageCarroussel />} />
        <Route path="a-propos" element={<AboutPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}

export default AppRouter;
