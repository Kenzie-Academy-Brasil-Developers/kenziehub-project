import React, { useContext } from 'react';

import { TechContext } from '../../contexts/techContext';
import { Container } from '../../styles/Container';
import { AddButton } from '../AddButton';
import { TechCard } from '../TechCard';
import { TechHeader, TechWrapper } from './styles';

export const Main = () => {
    const { techs, setRegisModal, setModalInfo, setEditModal } = useContext(TechContext);

    const handleModal = (event) => {
        setModalInfo({
            id: event.target.id,
            title: event.target.children[0].textContent,
            status: event.target.children[1].textContent,
        });
        setEditModal(true);
    };

    return (
        <Container>
            <TechHeader>
                <h3>Tecnologias</h3>
                <AddButton onClick={() => setRegisModal(true)} />
            </TechHeader>
            <TechWrapper>
                {techs.map(({ title, status, id }) =>
                    <TechCard key={id} name={title} status={status} techId={id} onClick={handleModal} />)}
            </TechWrapper>
        </Container>
    );
};
