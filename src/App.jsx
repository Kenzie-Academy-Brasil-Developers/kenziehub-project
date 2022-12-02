import React from 'react';
import { ToastContainer } from 'react-toastify';
import { MainRoutes as Routes } from './routes';

import 'react-toastify/dist/ReactToastify.min.css';

export const App = () => {
  return (
    <>
      <Routes />
      <ToastContainer
        position="top-right"
        autoClose={2377}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
};
