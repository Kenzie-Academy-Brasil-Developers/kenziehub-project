import React from 'react';
import { useNavigate } from 'react-router-dom';

import { BrandTitle } from '../../components/BrandTitle';
import { FormRegister } from '../../components/Form/FormRegister';

import { MediumButton } from '../../styles/Buttons';
import { Container } from '../../styles/Container';
import { RegisterCard, RegisterContainer } from './styles';

export const Register = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <RegisterContainer>
        <div className='header__register'>
          <BrandTitle fontSize='24px' />
          <MediumButton type='button' onClick={() => navigate('/')}>Voltar</MediumButton>
        </div>
        <RegisterCard>
          <h3>Crie sua conta</h3>
          <span>Rapido e grátis, vamos nessa</span>
          <FormRegister />
        </RegisterCard>
      </RegisterContainer>
    </Container>
  );
};
