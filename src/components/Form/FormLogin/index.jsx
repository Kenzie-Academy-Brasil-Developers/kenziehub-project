import { yupResolver } from '@hookform/resolvers/yup';
import React, { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { UserContext } from '../../../contexts/userContext';
import { Button } from '../../../styles/Buttons';
import { Input } from '../../Input';
import { loginSchema } from './loginSchema';

export const FormLogin = () => {
    const { loading, requestLoginApi } = useContext(UserContext);

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        mode: 'onChange',
        resolver: yupResolver(loginSchema)
    });

    useEffect(() => reset(), [requestLoginApi]);

    return (
        <form noValidate onSubmit={handleSubmit(requestLoginApi)}>
            <Input type='email' placeholder='Digite aqui seu email' label='Email' register={register('email')} errors={errors.email} />
            <Input type='password' placeholder='Digite aqui sua senha' label='Senha' register={register('password')} errors={errors.password} />
            <Button type='submit' disabled={loading} variant={loading ? 'negative' : 'primary'}>Entrar</Button>
        </form>
    );
};
