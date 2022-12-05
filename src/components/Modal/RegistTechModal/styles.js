import styled from 'styled-components';

export const Modal = styled.div`
    position: fixed;
    inset: 0;
    z-index: 100;
    width: 100vw;
    height: 100vh;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--color-overlay-grey-0);
`;

export const ModalWrapper = styled.div`
    position: relative;
    width: 100%;
    max-width: 369px;
    height: 100%;
    max-height: 342px;
    overflow-y: auto;
    padding: 68px 22px 0;
    background-color: var(--color-grey-3);
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
`;

export const ModalHeader = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height: 50px;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--color-grey-2);

    & > h4 {
        font-weight: 700;
        font-size: .875rem;
        line-height: 1.5rem;
        color: var(--color-grey-0);
    }
`;