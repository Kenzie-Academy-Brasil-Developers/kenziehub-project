import React from 'react';

import { DefaultLabel } from '../../../styles/Labels';
import { DefaultSelect } from '../../../styles/Selects';
import { SelectContainer } from './styles';

export const Select = ({ id, register, children }) => {
  return (
    <SelectContainer>
      <DefaultLabel htmlFor={id}>Selecionar Módulo</DefaultLabel>
      <DefaultSelect id={id} {...register}>
        {children}
      </DefaultSelect>
    </SelectContainer>
  );
};
