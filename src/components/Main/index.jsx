import React, { useContext } from 'react';

import { UserContext } from '../../contexts/userContext';
import { Container } from '../../styles/Container';
import { AddButton } from '../AddButton';
import { TechCard } from '../TechCard';

import { TechHeader, TechWrapper } from './styles';

export const Main = () => {
    const { techs } = useContext(UserContext);

    return (
        <Container>
            <TechHeader>
                <h3>Tecnologias</h3>
                <AddButton />
            </TechHeader>
            <TechWrapper>
                {techs.map(({ title, status, id }) =>
                    <TechCard key={id} name={title} status={status} techId={id} />)}
            </TechWrapper>
        </Container>
    );
};
