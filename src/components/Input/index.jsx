import React from 'react';

import { DefaultInput } from '../../styles/Inputs';
import { InputContainer } from './styles';

export const Input = ({ type, placeholder, label, register }) => {
    return (
        <InputContainer>
            <label htmlFor={label.toLowerCase()}>{label}</label>
            <DefaultInput type={type} id={label.toLowerCase()} placeholder={placeholder} {...register} />
        </InputContainer>
    );
};
