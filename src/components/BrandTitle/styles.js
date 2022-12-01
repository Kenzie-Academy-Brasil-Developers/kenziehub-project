import styled from 'styled-components';

export const Title = styled.h1`
    font-size: ${({fontSize}) => fontSize};
    color: var(--color-primary);
    user-select: none;
`;