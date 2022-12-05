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
    width: 100%;
    max-width: 369px;
    height: 100%;
    max-height: 342px;
    overflow-y: auto;
    padding: 22px 17px;
    background-color: var(--color-grey-3);
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
`;

export const ModalHeader = styled.div`

`;