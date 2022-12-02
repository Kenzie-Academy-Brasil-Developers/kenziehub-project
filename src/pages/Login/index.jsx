import React from 'react';
import { useNavigate } from 'react-router-dom';

import { BrandTitle } from '../../components/BrandTitle';
import { FormLogin } from '../../components/Form/FormLogin';

import { Button, SecondaryLink } from '../../styles/Buttons';
import { Container } from '../../styles/Container';
import { CardLogin, LoginContainer } from './styles';

export const Login = ({ setUser }) => {
  return (
    <Container>
      <LoginContainer>
        <BrandTitle fontSize='24px' />
        <CardLogin>
          <h3>Login</h3>
          <FormLogin setUser={setUser} />
          <span>Ainda não possui uma conta?</span>
          <SecondaryLink to='/register'>Cadastre-se</SecondaryLink>
        </CardLogin>
      </LoginContainer>
    </Container>
  );
};
