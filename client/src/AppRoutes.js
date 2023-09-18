import React from 'react';
import { Routes, Route } from 'react-router-dom';
import FormPage from './pages/FormPage';

const AppRoutes = ({ backendData }) => {
  return (
    <Routes>
      <Route path='/' element={<FormPage />} />
      <Route path='/hola' element={<FormPage />} />
    </Routes>
  );
};

export default AppRoutes;
