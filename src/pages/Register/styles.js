import styled from 'styled-components';

export const RegisterContainer = styled.div`
    width: 100%;
    max-width: 369px;
    margin: auto;
    padding-bottom: 12px;

    & > .header__register {
        display: flex;
        justify-content: space-between;
        margin: 38px 0 28px;
    }
`;

export const RegisterCard = styled.div`
    background-color: var(--color-grey-3);
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    padding: 2.625rem 1.375rem;
    height: max-content;

    & > h3 {
        text-align: center;
        color: var(--color-grey-0);
        font-weight: 700;
        font-size: 1.25rem;
        line-height: 1.75rem;
    }

    & > span {
        display: flex;
        justify-content: center;
        font-weight: 400;
        font-size: 12.9px;
        line-height: 1.375rem;
        color: var(--color-grey-1);
        margin: 12px 0;
    }
`;