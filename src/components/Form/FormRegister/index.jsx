import React from 'react';

import { Button } from '../../../styles/Buttons';
import { Input } from '../../Input';
import { Select } from '../../Select/SelectModule';

export const FormRegister = () => {
    return (
        <form>
            <Input type='text' placeholder='Digite aqui seu nome' label='Nome' register='' />
            <Input type='email' placeholder='Digite aqui seu email' label='Email' register='' />
            <Input type='password' placeholder='Digite aqui sua senha' label='Senha' register='' />
            <Input type='password' placeholder='Digite novamente sua senha' label='Confirmar Senha' register='' />
            <Input type='text' placeholder='Fale sobre você' label='Bio' register='' />
            <Input type='text' placeholder='Opção de contato' label='Contato' register='' />
            <Select id='select-module' register=''>
                <option defaultValue={true} value="">Selecione seu módulo</option>
                <option value="module">Primeiro módulo (Introdução ao Frontend)</option>
                <option value="module">Segundo módulo (Frontend Avançado)</option>
                <option value="module">Terceiro módulo (Introdução ao Backend)</option>
                <option value="module">Quarto módulo (Backend Avançado)</option>
            </Select>
            <Button type='submit' variant='primary'>Cadastrar</Button>
        </form>
    );
};
