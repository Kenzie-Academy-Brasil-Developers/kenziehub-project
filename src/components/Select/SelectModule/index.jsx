import React from 'react';

import { DefaultLabel } from '../../../styles/Labels';
import { FormError } from '../../../styles/Messages';
import { DefaultSelect } from '../../../styles/Selects';
import { SelectContainer } from './styles';

export const Select = ({ id, label, register, errors , children, defaultValue }) => {
  return (
    <SelectContainer>
      <DefaultLabel htmlFor={id}>{label}</DefaultLabel>
      <DefaultSelect id={id} {...register} defaultValue={defaultValue}>
        {children}
      </DefaultSelect>
      {errors && <FormError>{errors.message}</FormError>}
    </SelectContainer>
  );
};
