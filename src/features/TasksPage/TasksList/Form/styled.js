import styled from "styled-components";

export const FormTable = styled.form`
    display: grid;
    grid-template-columns: 4fr 1fr;

    @media (max-width: 767px) {
        grid-template-columns: 1fr;
        text-align: center;
    }
    `


export const Button = styled.button`
    background-color: teal;
    color: white;
    padding: 8px;
    margin-left: 15px;
    border-style: none;

    @media (max-width: 767px) {
        margin: 0;
        margin-top: 10px;
    }

    &:hover {
        background-color: rgb(1, 141, 141);
        cursor: pointer;
        transform: scale(1.1);
        transition: 1s;
    }

    &:active {
        border: 2px solid black;
    }
`;