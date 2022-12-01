import styled from 'styled-components';

export const DefaultInput = styled.input`
    font-family: var(--font-family);
    color: var(--color-grey-1);
    font-weight: 400;
    font-size: 1.0152rem;
    line-height: 1.625rem;
    background: var(--color-grey-2);
    border: 1.2182px solid var(--color-grey-2);
    padding: 0 1.0152rem;
    height: 3rem;
    border-radius: 4px;
    outline: none;
    width: 100%;

    &:focus {
        border: 1.2182px solid var(--color-grey-0);
        color: var(--color-grey-0);
    }

    &:focus::placeholder {
        color: var(--color-grey-0);
    }
`;