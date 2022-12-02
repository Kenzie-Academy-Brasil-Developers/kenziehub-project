import React from 'react';
import { Container } from '../../styles/Container';
import { HeaderContainer } from './styles';

export const Header = ({ user }) => {
    return (
        <HeaderContainer>
            <Container>
                <p>Olá, {user.name}</p>
                <span>{user.course_module}</span>
            </Container>
        </HeaderContainer>
    );
};
