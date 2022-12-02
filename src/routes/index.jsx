import React, { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { Dashboard } from '../pages/Dashboard';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';

export const MainRoutes = () => {
  const [user, setUser] = useState({});

  return (
    <Routes>
      <Route path='' element={<Login setUser={setUser} />} />
      <Route path='/register' element={<Register />} />
      <Route path='/dashboard' element={<Dashboard user={user} />} />
      <Route path='*' element={<Navigate to='' />} />
    </Routes>
  );
};
