import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

const ButtonVariant = {
    primary: css`
        background-color: var(--color-primary);
        cursor: pointer;

        &:hover {
            background-color: var(--color-primary-focus);
        }
    `,
    negative: css`
        background-color: var(--color-primary-negative);
    `,
    disabled: css`
        background-color: var(--color-grey-1);
        cursor: pointer;

        &:hover {
            background-color: var(--color-grey-2);
        }
    `
};

export const Button = styled.button`
    ${({ variant }) => ButtonVariant[variant]}
    width: 100%;
    height: 3rem;
    padding: 0 1.3959rem;
    border: none;
    border-radius: .25rem;
    font-family: var(--font-family);
    color: var(--color-white);
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.625rem;
    transition: all .3s;
`;

export const DefaultLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--color-grey-3);
    height: 2rem;
    padding: 0 1.0152rem;
    border: none;
    border-radius: .25rem;
    font-family: var(--font-family);
    color: var(--color-grey-0);
    font-weight: 600;
    font-size: .75rem;
    line-height: 1.75rem;
    text-align: center;
    cursor: pointer;
    transition: all .3s;

    &:hover {
        background-color: var(--color-grey-2);
    }
`;

export const SecondaryLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--color-grey-1);
    width: 100%;
    height: 3rem;
    padding: 0 1.3959rem;
    border: none;
    border-radius: .25rem;
    font-family: var(--font-family);
    color: var(--color-white);
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.625rem;
    cursor: pointer;
    transition: all .3s;

    &:hover {
        background-color: var(--color-grey-2);
    }
`;

export const TrashButton = styled.button`
    background: transparent;
    border: none;
    width: 16px;
    height: 16px;
    padding: 14px;
    border-radius: 4px;
    background-image: url(/trash.svg);
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
    transition: all .3s;
    
    &:hover {
        background: var(--color-grey-2);
        background-image: url(/trash.svg);
        background-repeat: no-repeat;
        background-position: center;
    }
`;