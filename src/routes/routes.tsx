// src/routes/AppRoutes.tsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import ErrorPage from "@/pages/error";
import Doencas from "@/pages/doencas";
import AcompanharCasos from "@/pages/acompanharCasos";
import EncontrarPostos from "@/pages/encontrarPostos";
import Sintomas from "@/pages/verificarSintomar";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* Rota pública */}
      <Route path="/" element={<Home />} />
      <Route path="Doencas/:tipo" element={<Doencas />} />
      <Route path="AcompanharCasos" element={<AcompanharCasos />} />
      <Route path="VerificarCasos" element={<AcompanharCasos />} />
      <Route path="EncontrarPostos" element={<EncontrarPostos />} />
      <Route path="Sintomas" element={<Sintomas />} />
      {/* Rota de erro */}
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default AppRoutes;

