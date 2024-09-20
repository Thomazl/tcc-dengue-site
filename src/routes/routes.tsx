// src/routes/AppRoutes.tsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import ErrorPage from "@/pages/error";
import Doencas from "@/pages/doencas";
import AcompanharCasos from "@/pages/acompanharCasos";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* Rota pública */}
      <Route path="/" element={<Home />} />
      <Route path="Doencas/:tipo" element={<Doencas />} />
      <Route path="AcompanharCasos" element={<AcompanharCasos />} />
      {/* Rota de erro */}
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default AppRoutes;

