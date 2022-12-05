import React from 'react';

import { Container } from '../../styles/Container';
import { AddButton } from '../AddButton';
import { TechHeader } from './styles';

export const Main = () => {
    return (
        <Container>
            <TechHeader>
                <h3>Tecnologias</h3>
                <AddButton />
            </TechHeader>
        </Container>
    );
};
