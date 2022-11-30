import React from 'react';

import { DefaultInput } from '../../styles/Inputs';
import { DefaultLabel } from '../../styles/Labels';
import { InputContainer } from './styles';

export const Input = ({ type, placeholder, label, register }) => {
    return (
        <InputContainer>
            <DefaultLabel htmlFor={label.toLowerCase()}>{label}</DefaultLabel>
            <DefaultInput type={type} id={label.toLowerCase()} placeholder={placeholder} {...register} />
        </InputContainer>
    );
};
