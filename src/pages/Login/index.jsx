import React from 'react';

import { BrandTitle } from '../../components/BrandTitle';
import { FormLogin } from '../../components/Form/FormLogin';

import { Button } from '../../styles/Buttons';
import { Container } from '../../styles/Container';
import { CardLogin, LoginContainer } from './styles';

export const Login = () => {
  return (
    <Container>
      <LoginContainer>
        <BrandTitle fontSize='24px' />
        <CardLogin>
          <h3>Login</h3>
          <FormLogin />
          <span>Ainda não possui uma conta?</span>
          <Button type='button' variant='disabled'>Cadastre-se</Button>
        </CardLogin>
      </LoginContainer>
    </Container>
  );
};
