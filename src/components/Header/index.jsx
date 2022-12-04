import React, { useContext } from 'react';

import { UserContext } from '../../contexts/userContext';
import { Container } from '../../styles/Container';
import { HeaderContainer } from './styles';

export const Header = () => {
    const { user } = useContext(UserContext);

    return (
        <HeaderContainer>
            <Container>
                <p>Olá, {user.name}</p>
                <span>{user.course_module}</span>
            </Container>
        </HeaderContainer>
    );
};
