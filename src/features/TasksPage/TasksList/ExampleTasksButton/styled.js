import styled from "styled-components";

export const ModalTitel = styled.h1`
    max-width: 100%;;
    text-align: center;
`;

export const ModalText = styled.p`
    font-size: 20px;
`;

export const ModalButton = styled.button`
    margin-left: 10px;
    background-color: teal;
    color: white;
    border-radius: 5px;
    font-size: 20px;
`;

export const ModalStyle = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

export const ModalButtonsGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`;