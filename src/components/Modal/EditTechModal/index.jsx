import React, { useContext, useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { TechContext } from '../../../contexts/techContext';

import { Button, CloseButton } from '../../../styles/Buttons';
import { Input } from '../../Input';
import { Select } from '../../Select/SelectModule';
import { Modal, ModalFooter, ModalHeader, ModalWrapper } from './styles';

export const EditTechModal = () => {
    const { register, handleSubmit } = useForm({
        mode: 'onChange',
    });

    const { setEditModal, loading, modalInfo, deleteTechApi } = useContext(TechContext);
    const [disableSubmit, setDisableSubmit] = useState(true);
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

    const handleSubmitButton = (event) => {
        if (event.target.value === modalInfo.status) {
            setDisableSubmit(true);
        } else {
            setDisableSubmit(false);
        }
    };

    return (
        <Modal ref={modalRef}>
            <ModalWrapper>
                <ModalHeader>
                    <h4>Tecnologia Detalhes</h4>
                    <CloseButton onClick={() => setEditModal()} />
                </ModalHeader>
                <form noValidate onSubmit={handleSubmit()}>
                    <Input type='text' placeholder={modalInfo.title} label='Nome' disabled={true} />
                    <Select
                        id='select-techs'
                        label='Selecionar status'
                        register={register('status')}
                        defaultValue={modalInfo.status}
                        onChange={handleSubmitButton}>
                        <option value="Iniciante">Iniciante</option>
                        <option value="Intermediário">Intermediário</option>
                        <option value="Avançado">Avançado</option>
                    </Select>
                    <ModalFooter>
                        <Button
                            type='submit'
                            disabled={loading || disableSubmit}
                            variant={loading || disableSubmit ? 'negative' : 'primary'}
                            id={modalInfo.id}
                        >Salvar alterações</Button>

                        <Button
                            type='button'
                            disabled={loading}
                            variant='disabled'
                            id={modalInfo.id}
                            onClick={(event) => deleteTechApi(event.target.id)}
                        >Excluir</Button>
                    </ModalFooter>
                </form>
            </ModalWrapper>
        </Modal>
    );
};
