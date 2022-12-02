import React from 'react';

import { Navbar } from '../../components/Navbar';

export const Dashboard = ({ user, setUser }) => {
  return (
    <>
      <Navbar setUser={setUser} />
    </>
  );
};
