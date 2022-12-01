import React from 'react';

import { DefaultInput } from '../../styles/Inputs';
import { DefaultLabel } from '../../styles/Labels';
import { InputContainer } from './styles';

export const Input = ({ type, placeholder, label, register, onChange }) => {
    return (
        <InputContainer>
            <DefaultLabel htmlFor={label.toLowerCase()}>{label}</DefaultLabel>
            <DefaultInput
                type={type}
                id={label.toLowerCase()}
                placeholder={placeholder}
                {...register}
                onChange={(e) => onChange(e.target.value)}
            />
        </InputContainer>
    );
};
