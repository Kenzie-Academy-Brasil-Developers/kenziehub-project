import React, { useContext, useEffect, useRef } from 'react';
import { TechContext } from '../../../contexts/techContext';

import { Button, CloseButton } from '../../../styles/Buttons';
import { Input } from '../../Input';
import { Select } from '../../Select/SelectModule';
import { Modal, ModalFooter, ModalHeader, ModalWrapper } from './styles';

export const EditTechModal = () => {
    const { setEditModal, loading, modalInfo } = useContext(TechContext);
    const modalRef = useRef(null);

    useEffect(() => {
        const modalOutClick = (e) => {
            const target = e.target.className;
            const element = modalRef.current.className;

            if (target.includes(element)) {
                setEditModal(false);
            }
        };
        window.addEventListener('mousedown', modalOutClick);
        return () => window.removeEventListener('mousedown', modalOutClick);
    }, []);

    return (
        <Modal ref={modalRef}>
            <ModalWrapper>
                <ModalHeader>
                    <h4>Tecnologia Detalhes</h4>
                    <CloseButton onClick={() => setEditModal(false)} />
                </ModalHeader>
                <form noValidate>
                    <Input type='text' placeholder={modalInfo.title} label='Nome' disabled={true} />
                    <Select id='select-techs' label='Selecionar status' register='' defaultValue={modalInfo.status}>
                        <option value="Iniciante">Iniciante</option>
                        <option value="Intermediário">Intermediário</option>
                        <option value="Avançado">Avançado</option>
                    </Select>
                    <ModalFooter>
                        <Button
                            type='submit'
                            disabled={loading}
                            variant={loading ? 'negative' : 'primary'}
                            id={modalInfo.id}
                        >Salvar alterações</Button>
                        <Button type='button' variant='disabled' id={modalInfo.id}>Excluir</Button>
                    </ModalFooter>
                </form>
            </ModalWrapper>
        </Modal>
    );
};
