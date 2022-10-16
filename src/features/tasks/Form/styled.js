import styled from "styled-components";

export const Main = styled.form`
    background-color: white;
    padding: 20px;
    margin: 1px 20px 1px 20px;
    display: grid;
    grid-template-columns: 4fr 1fr;

    @media (max-width: 767px) {
        grid-template-columns: 1fr;
    }
`;

export const Forms = styled.input`
    padding: 8px;
    border: 2px solid #eee;

    &:hover {
        background-color: rgb(244, 243, 243);
        cursor: text;
    }

    &:active {
        border-color: black;
    }
`;

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