import React from 'react';

import { ButtonStyled } from './styles';

export const AddButton = ({ onClick }) => {
    return (
        <ButtonStyled onClick={onClick}>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.74012 11.2468H6.87356V7.01242H11.1721V4.91086H6.87356V0.684296H4.74012V4.91086H0.449463V7.01242H4.74012V11.2468Z" fill="white" />
            </svg>
        </ButtonStyled>
    );
};
