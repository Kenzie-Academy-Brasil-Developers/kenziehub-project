import React, { useContext } from 'react';

import { TechContext } from '../../contexts/techContext';
import { Container } from '../../styles/Container';
import { AddButton } from '../AddButton';
import { TechCard } from '../TechCard';
import { TechHeader, TechWrapper } from './styles';

export const Main = () => {
    const { techs, setRegisModal, deleteTechApi, loading } = useContext(TechContext);

    const handleDeleteButton = (event) => deleteTechApi(event.target.id);

    return (
        <Container>
            <TechHeader>
                <h3>Tecnologias</h3>
                <AddButton onClick={() => setRegisModal(true)} />
            </TechHeader>
            <TechWrapper>
                {techs.map(({ title, status, id }) =>
                    <TechCard key={id} name={title} status={status} techId={id} onClick={handleDeleteButton} loading={loading} />)}
            </TechWrapper>
        </Container>
    );
};
