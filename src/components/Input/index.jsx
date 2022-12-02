import React from 'react';

import { DefaultInput } from '../../styles/Inputs';
import { DefaultLabel } from '../../styles/Labels';
import { FormError } from '../../styles/Messages';
import { InputContainer } from './styles';

export const Input = ({ type, placeholder, label, register, errors }) => {
    return (
        <InputContainer>
            <DefaultLabel htmlFor={label.toLowerCase()}>{label}</DefaultLabel>
            <DefaultInput
                type={type}
                id={label.toLowerCase()}
                placeholder={placeholder}
                {...register}
            />
            {errors && <FormError>{errors.message}</FormError>}
        </InputContainer>
    );
};
