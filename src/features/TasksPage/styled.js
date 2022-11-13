import styled from "styled-components";

export const Main = styled.main`
    font-family: 'Lato', sans-serif;
    max-width: 800px;
    margin: 0 auto;
    font-family: 'Lato', sans-serif;
`;

export const Input = styled.input`
    border: 2px solid #eee;
    padding: 8px;
    background-color: rgb(244, 243, 243);

    &:hover {
        background-color: rgb(244, 243, 243);
        cursor: text;
    }

    &:active {
        border-color: black;
    }
`;

export const Button = styled.button`
    background-color: white;
    border: none;
    color: teal;
    font-size: 15px;
    padding: 5px;

    &:hover {
        color: rgba(0,128,128,0.5);
        transition: 1s;
        cursor: pointer;
    }

    &:disabled {
        color: gray;
        cursor: not-allowed;
    }
`;

export const InputAndTasks = styled.div`
    background-color: white;
    margin: 2px 20px 0px 20px;
    padding: 10px;
`;


