import React, { useContext } from 'react';

import { UserContext } from '../../contexts/userContext';
import { DefaultLink } from '../../styles/Buttons';
import { Container } from '../../styles/Container';
import { BrandTitle } from '../BrandTitle';
import { NavbarContainer } from './styles';

export const Navbar = () => {
    const { handleLogout } = useContext(UserContext);

    return (
        <NavbarContainer>
            <Container>
                <BrandTitle fontSize='24px' />
                <ul>
                    <li>
                        <DefaultLink to='/' onClick={handleLogout}>Sair</DefaultLink>
                    </li>
                </ul>
            </Container>
        </NavbarContainer>
    );
};
