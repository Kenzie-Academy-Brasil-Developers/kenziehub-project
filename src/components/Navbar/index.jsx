import React from 'react';

import { DefaultLink } from '../../styles/Buttons';
import { Container } from '../../styles/Container';
import { BrandTitle } from '../BrandTitle';
import { NavbarContainer } from './styles';

export const Navbar = ({ setUser }) => {

    const handleLogout = () => {
        setUser({});
        localStorage.clear();
    };

    return (
        <NavbarContainer>
            <Container>
                <BrandTitle fontSize='24px' />
                <DefaultLink to='/' onClick={handleLogout}>Sair</DefaultLink>
            </Container>
        </NavbarContainer>
    );
};
