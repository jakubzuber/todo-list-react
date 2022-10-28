import styled from "styled-components";

export const MainButtons = styled.span`
    

    @media (max-width: 767px) {
        grid-template-columns: 1fr;
        margin-top: 5px;
        }   
`;

export const Button = styled.button`
    background-color: white;
    border: none;
    color: teal;
    font-size: 15px;
    padding: 5px;

    &:hover {
        color: rgb(1, 159, 159);
        transition: 1s;
        cursor: pointer;
    }

    &:disabled {
        color: gray;
        cursor: not-allowed;
    }
`;