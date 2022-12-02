import React from 'react';

import { DefaultLabel } from '../../../styles/Labels';
import { FormError } from '../../../styles/Messages';
import { DefaultSelect } from '../../../styles/Selects';
import { SelectContainer } from './styles';

export const Select = ({ id, register, errors , children }) => {
  return (
    <SelectContainer>
      <DefaultLabel htmlFor={id}>Selecionar Módulo</DefaultLabel>
      <DefaultSelect id={id} {...register}>
        {children}
      </DefaultSelect>
      {errors && <FormError>{errors.message}</FormError>}
    </SelectContainer>
  );
};
