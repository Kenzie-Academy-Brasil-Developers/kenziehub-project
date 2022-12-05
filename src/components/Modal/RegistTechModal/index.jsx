import React, { useContext, useEffect, useRef } from 'react';

import { TechContext } from '../../../contexts/techContext';
import { Button, CloseButton } from '../../../styles/Buttons';
import { Input } from '../../Input';
import { Select } from '../../Select/SelectModule';
import { Modal, ModalHeader, ModalWrapper } from './styles';

export const RegisTechModal = () => {
    const { setRegisModal } = useContext(TechContext);
    const modalRef = useRef(null);

    useEffect(() => {
        const modalOutClick = (e) => {
            const target = e.target.className;
            const element = modalRef.current.className;

            if (element.includes(target)) {
                setRegisModal(false);
            }
        };
        window.addEventListener('mousedown', modalOutClick);
        return () => window.removeEventListener('mousedown', modalOutClick);
    }, []);

    return (
        <Modal ref={modalRef}>
            <ModalWrapper>
                <ModalHeader>
                    <h4>Cadastrar Tecnologia</h4>
                    <CloseButton onClick={() => setRegisModal(false)} />
                </ModalHeader>
                <form>
                    <Input type='text' placeholder='Digite o nome da tecnologia' label='Nome' />
                    <Select id='select-techs' label='Selecionar status'>
                        <option value="Iniciante">Iniciante</option>
                        <option value="Intermediário">Intermediário</option>
                        <option value="Avançado">Avançado</option>
                    </Select>
                    <Button type='submit' variant='primary'>Cadastrar Tecnologia</Button>
                </form>
            </ModalWrapper>
        </Modal>
    );
};
