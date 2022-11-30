import React from 'react';
import { useNavigate } from 'react-router-dom';

import { BrandTitle } from '../../components/BrandTitle';
import { FormLogin } from '../../components/Form/FormLogin';

import { Button } from '../../styles/Buttons';
import { Container } from '../../styles/Container';
import { CardLogin, LoginContainer } from './styles';

export const Login = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <LoginContainer>
        <BrandTitle fontSize='24px' />
        <CardLogin>
          <h3>Login</h3>
          <FormLogin />
          <span>Ainda não possui uma conta?</span>
          <Button type='button' variant='disabled' onClick={() => navigate('/register')}>Cadastre-se</Button>
        </CardLogin>
      </LoginContainer>
    </Container>
  );
};
