import styled from 'styled-components';

export const MainContainer = styled.main`
    p:nth-child(1) {
        color: var(--color-grey-0);
        font-weight: 700;
        font-size: 1.125rem;
        line-height: 1.75rem;
        margin-bottom: 23px;

        & + p {
            color: var(--color-white);
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
        }
    }
`;