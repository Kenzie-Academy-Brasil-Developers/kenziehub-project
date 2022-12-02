import React from 'react';

import { Header } from '../../components/Header';
import { Main } from '../../components/Main';
import { Navbar } from '../../components/Navbar';

export const Dashboard = ({ user, setUser }) => {
  return (
    <>
      <Navbar setUser={setUser} />
      <Header user={user} />
      <Main />
    </>
  );
};
