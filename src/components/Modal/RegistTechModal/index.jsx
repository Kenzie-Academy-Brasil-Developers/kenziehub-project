import React from 'react';
import { Button, CloseButton } from '../../../styles/Buttons';
import { Input } from '../../Input';
import { Select } from '../../Select/SelectModule';

import { Modal, ModalHeader, ModalWrapper } from './styles';

export const RegisTechModal = () => {
    return (
        <Modal>
            <ModalWrapper>
                <ModalHeader>
                    <h4>Cadastrar Tecnologia</h4>
                    <CloseButton />
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
