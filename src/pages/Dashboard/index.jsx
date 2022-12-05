import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Header } from '../../components/Header';
import { Main } from '../../components/Main';
import { RegisTechModal } from '../../components/Modal/RegistTechModal';
import { Navbar } from '../../components/Navbar';
import { TechContext } from '../../contexts/techContext';

export const Dashboard = () => {
  const { regisModal } = useContext(TechContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.userToken) navigate('/');
  }, []);

  return (
    <>
      {regisModal && <RegisTechModal />}
      <Navbar />
      <Header />
      <Main />
    </>
  );
};
