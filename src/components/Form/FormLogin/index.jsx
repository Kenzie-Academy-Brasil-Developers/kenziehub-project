import React, { useState } from 'react';

import { Button } from '../../../styles/Buttons';
import { Input } from '../../Input';

export const FormLogin = () => {
    const [handleEmail, setHandleEmail] = useState('');
    const [handlePwd, setHandlePwd] = useState('');

    const checkCondition = handleEmail.length && handlePwd.length ? true : false;

    return (
        <form>
            <Input type='email' placeholder='Digite aqui seu email' label='Email' register='' onChange={setHandleEmail} />
            <Input type='password' placeholder='Digite aqui sua senha' label='Senha' register='' onChange={setHandlePwd} />
            <Button type='submit' disabled={!checkCondition} variant={checkCondition ? 'primary' : 'negative'}>Entrar</Button>
        </form>
    );
};
