import styled from 'styled-components';

export const TechHeader = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > h3 {
        font-weight: 600;
        font-size: 1rem;
        line-height: 1.125rem;
        color: var(--color-grey-0);
    }
`;

export const TechWrapper = styled.ul`
    background-color: var(--color-grey-3);
    border-radius: 4px;
    width: 100%;
    padding: 25px;
    display: flex;
    flex-direction: column;
    gap: 14px;
`;