import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { instance } from '../../../services/api';

import { Button } from '../../../styles/Buttons';
import { Input } from '../../Input';
import { loginSchema } from './loginSchema';

export const FormLogin = ({ setUser }) => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        mode: 'onChange',
        resolver: yupResolver(loginSchema)
    });

    const fetchApi = async (data) => {
        try {
            setLoading(true);
            const response = await instance.post('/sessions', data);
            setUser(response.data.user);
            reset();
            navigate('/dashboard');
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form noValidate onSubmit={handleSubmit(fetchApi)}>
            <Input type='email' placeholder='Digite aqui seu email' label='Email' register={register('email')} errors={errors.email} />
            <Input type='password' placeholder='Digite aqui sua senha' label='Senha' register={register('password')} errors={errors.password} />
            <Button type='submit' disabled={loading} variant={loading ? 'negative' : 'primary'}>Cadastrar</Button>
        </form>
    );
};
