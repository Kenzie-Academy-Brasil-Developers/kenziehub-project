import styled from 'styled-components';

export const ButtonStyled = styled.button`
    display: grid;
    place-items: center;
    background-color: var(--color-grey-3);
    border: none;
    border-radius: 4px;
    width: 32px;
    height: 32px;
    cursor: pointer;
    transition: all .3s;

    &:hover {
        background-color: var(--color-grey-2);
    }
`;