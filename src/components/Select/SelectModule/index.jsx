import React from 'react';
import { DefaultLabel } from '../../../styles/Labels';

import { DefaultSelect } from '../../../styles/Selects';
import { SelectContainer } from './styles';

export const Select = ({ id, register }) => {
  return (
    <SelectContainer>
      <DefaultLabel htmlFor={id}>Selecionar Módulo</DefaultLabel>
      <DefaultSelect id={id} {...register}>
        <option defaultValue={true} value="">Selecionar módulo</option>
        <option value="module">Primeiro módulo (Introdução ao Frontend)</option>
        <option value="module">Segundo módulo (Frontend Avançado)</option>
        <option value="module">Terceiro módulo (Introdução ao Backend)</option>
        <option value="module">Quarto módulo (Backend Avançado)</option>
      </DefaultSelect>
    </SelectContainer>
  );
};
