// src/routes/AppRoutes.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home';
import ErrorPage from '@/pages/error';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* Rota pública */}
      <Route
        path="/"
        element={
            <Home />
        }
      />
        {/* Rota de erro */}
        <Route
        path="*"
        element={<ErrorPage />}
      />
    </Routes>
  );
};

export default AppRoutes;
