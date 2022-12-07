import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Header } from '../../components/Header';
import { Main } from '../../components/Main';
import { EditTechModal } from '../../components/Modal/EditTechModal';
import { RegisTechModal } from '../../components/Modal/RegistTechModal';
import { Navbar } from '../../components/Navbar';
import { WaitScreen } from '../../components/WaitScreen';
import { TechContext } from '../../contexts/techContext';
import { UserContext } from '../../contexts/userContext';

export const Dashboard = () => {
  const { regisModal, editModal } = useContext(TechContext);
  const { loadWaitScreen } = useContext(UserContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.userToken) navigate('/');
  }, []);

  return (
    <>
      {loadWaitScreen && <WaitScreen />}
      {regisModal && <RegisTechModal />}
      {editModal && <EditTechModal />}
      <Navbar />
      <Header />
      <Main />
    </>
  );
};
