import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { Dashboard } from '../pages/Dashboard';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';

export const MainRoutes = () => {

  return (
    <Routes>
      <Route path='' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='*' element={<Navigate to='' />} />
    </Routes>
  );
};
