import React from 'react';

import { DefaultLink } from '../../styles/Buttons';
import { Container } from '../../styles/Container';
import { BrandTitle } from '../BrandTitle';
import { NavbarContainer } from './styles';

export const Navbar = () => {
    return (
        <NavbarContainer>
            <Container>
                <BrandTitle fontSize='24px' />
                <DefaultLink to='/'>Sair</DefaultLink>
            </Container>
        </NavbarContainer>
    );
};
