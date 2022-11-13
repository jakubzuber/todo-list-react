import styled from "styled-components";
import Modal from "react-modal";

export const ModalForm = styled(Modal)`
    max-width: 600px;
    margin: 0 auto;
    margin-top: 18%;
    background-color: white;
    padding: 30px;
    border: 3px solid teal;
    text-align: center;
`;

export const ModalText = styled.p`
    font-size: 20px;
`;

export const ModalButton = styled.button`
    background-color: teal;
    margin: 10px;
    color: white;
    border-radius: 5px;
    font-size: 20px;
`;

export const ModalButtonsGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`;