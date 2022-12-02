import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import { instance } from '../../../services/api';

import { Button } from '../../../styles/Buttons';
import { Input } from '../../Input';
import { loginSchema } from './loginSchema';

export const FormLogin = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        mode: 'onChange',
        resolver: yupResolver(loginSchema)
    });

    const fetchApi = async (data) => {
        try {
            const response = await instance.post('/sessions', data);
            console.log(response.data)
            reset();
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <form noValidate onSubmit={handleSubmit(fetchApi)}>
            <Input type='email' placeholder='Digite aqui seu email' label='Email' register={register('email')} errors={errors.email} />
            <Input type='password' placeholder='Digite aqui sua senha' label='Senha' register={register('password')} errors={errors.password} />
            <Button type='submit' variant='primary'>Entrar</Button>
        </form>
    );
};
