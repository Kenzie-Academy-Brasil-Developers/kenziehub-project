import { yupResolver } from '@hookform/resolvers/yup';
import React, { useContext, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';

import { TechContext } from '../../../contexts/techContext';
import { Button, CloseButton } from '../../../styles/Buttons';
import { Input } from '../../Input';
import { Select } from '../../Select/SelectModule';
import { regisModalSchema } from './modalSchema';
import { Modal, ModalHeader, ModalWrapper } from './styles';

export const RegisTechModal = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: 'onChange',
        resolver: yupResolver(regisModalSchema)
    });

    const { setRegisModal, createTechApi } = useContext(TechContext);
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
                <form noValidate onSubmit={handleSubmit(createTechApi)}>
                    <Input type='text' placeholder='Digite o nome da tecnologia' label='Nome' register={register('title')} errors={errors.title} />
                    <Select id='select-techs' label='Selecionar status' register={register('status')} errors={errors.status}>
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
