import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Header } from '../../components/Header';
import { Main } from '../../components/Main';
import { Navbar } from '../../components/Navbar';

export const Dashboard = () => {
  const navigate = useNavigate();
  
  useEffect(() =>  {
    if (!localStorage.userToken) navigate('/');
  }, []);

  return (
    <>
      <Navbar />
      <Header />
      <Main />
    </>
  );
};
