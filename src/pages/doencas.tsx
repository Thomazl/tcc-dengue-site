"use client"
import React from "react";
import { useParams, Navigate } from "react-router-dom";

const Doencas: React.FC = () => {
  const { tipo } = useParams<Record<string, string | undefined>>();
  console.log(tipo);
  const renderContent = () => {
    switch (tipo) {
      case "Dengue":
        return (
          <p>
            Dengue é uma doença viral transmitida pelo mosquito Aedes aegypti.
          </p>
        );
      case "ZikaVirus":
        return (
          <p>
            Zika é uma doença causada pelo vírus Zika, também transmitida pelo
            Aedes aegypti.
          </p>
        );
      case "Chikungunya":
        return (
          <p>
            Chikungunya é uma doença viral transmitida pelo mosquito Aedes
            aegypti e Aedes albopictus.
          </p>
        );
      case "FebreAmarela":
        return (
          <p>
            Febre Amarela é uma doença viral transmitida por mosquitos em áreas tropicais.
          </p>
        );
      default:
        return <Navigate to="/erro" />
    }
  };

  return (
    <div>
      <h1>Informações sobre Doenças</h1>
      {renderContent()}
    </div>
  );
};

export default Doencas;
