import styled from 'styled-components';

export const LoginContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 38px;
    height: 100%;

    & > h1 {
        margin-bottom: 35.7px;
    }
`;

export const CardLogin = styled.div`
    width: 100%;
    max-width: 369px;
    height: max-content;
    padding: 2.625rem 1.375rem;
    background-color: var(--color-grey-3);
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
    border-radius: 4px;

    & > h3 {
        text-align: center;        
        margin-bottom: 28px;
        color: var(--color-grey-0);
        font-weight: 700;
        font-size: 1.25rem;
        line-height: 1.75rem;
    }

    & > span {
        display: flex;
        justify-content: center;
        color: var(--color-grey-1);
        font-weight: 600;
        font-size: .75rem;
        line-height: 1.125rem;
        margin: 34px 0 22px;
    }
`;