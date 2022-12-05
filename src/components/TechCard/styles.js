import styled from 'styled-components';

export const Card = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--color-grey-4);
    border-radius: 4px;
    padding: 14px;
    transition: all .3s;

    &:hover {
        background-color: var(--color-grey-2);
    }

    & > p {
        font-weight: 700;
        font-size: .8881rem;
        line-height: 1.375rem;
        color: var(--color-white);
    }

    & > div {
        display: flex;
        align-items: center;
        gap: 25px;

        & > span {
            font-weight: 400;
            font-size: 12.182px;
            line-height: 22px;
            color: var(--color-grey-1);
        }
    }
`;