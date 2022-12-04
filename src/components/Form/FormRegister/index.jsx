import { yupResolver } from '@hookform/resolvers/yup';
import React, { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { UserContext } from '../../../contexts/userContext';
import { Button } from '../../../styles/Buttons';
import { Input } from '../../Input';
import { Select } from '../../Select/SelectModule';
import { registerSchema } from './registerSchema';

export const FormRegister = () => {
    const { loading, requestRegisterApi } = useContext(UserContext);
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        mode: 'onChange',
        resolver: yupResolver(registerSchema)
    });

    useEffect(() => reset(), [requestRegisterApi]);

    return (
        <form noValidate onSubmit={handleSubmit(requestRegisterApi)}>
            <Input type='text' placeholder='Digite aqui seu nome' label='Nome' register={register('name')} errors={errors.name} />
            <Input type='email' placeholder='Digite aqui seu email' label='Email' register={register('email')} errors={errors.email} />
            <Input type='password' placeholder='Digite aqui sua senha' label='Senha' register={register('password')} errors={errors.password} />
            <Input type='password' placeholder='Digite novamente sua senha' label='Confirmar Senha' register={register('confirmPwd')} errors={errors.confirmPwd} />
            <Input type='text' placeholder='Fale sobre você' label='Bio' register={register('bio')} errors={errors.bio} />
            <Input type='text' placeholder='Opção de contato' label='Contato' register={register('contact')} errors={errors.contact} />
            <Select id='select-module' register={register('course_module')} errors={errors.course_module} >
                <option defaultValue={true} value="">Selecione seu módulo</option>
                <option value="Primeiro módulo (Introdução ao Frontend)">Primeiro módulo</option>
                <option value="Segundo módulo (Frontend Avançado)">Segundo módulo</option>
                <option value="Terceiro módulo (Introdução ao Backend)">Terceiro módulo</option>
                <option value="Quarto módulo (Backend Avançado)">Quarto módulo</option>
            </Select>
            <Button type='submit' disabled={loading} variant={loading ? 'negative' : 'primary'}>Cadastrar</Button>
        </form>
    );
};
