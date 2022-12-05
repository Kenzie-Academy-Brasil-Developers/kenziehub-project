import styled from 'styled-components';

export const HeaderContainer = styled.header`
    height: 118px;

    border-top: 1.7px solid var(--color-grey-3);
    border-bottom: 1.7px solid var(--color-grey-3);
    margin-bottom: 18px;

    & > div {
        display: flex;
        align-items: center;
        justify-content: space-between;

        & > p {
            color: var(--color-grey-0);
            font-weight: 600;
            font-size: 1.125rem;
            line-height: 1.75rem;
        }

        & > span {
            color: var(--color-grey-1);
            font-weight: 400;
            font-size: .7875rem;
            line-height: 1.375rem;
        }
    }

    @media (max-width: 650px) {
        & > div {
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
        }
    }
`;