// src/router/AppRouter.jsx
import { Routes, Route } from "react-router-dom";
import HomePage from "../HomePage/HomePage";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}

export default AppRouter;
