import styled, { css } from "styled-components"

export const List = styled.ul`
    background-color: white;
    padding: 15px;
    margin: 1px 20px 1px 20px;
    list-style: inside;
`;

export const Task = styled.li`
    border-bottom: 1px solid #eee;
    list-style-type: none;
    padding: 5px;
    font-size: 17px;
    display: grid;
    grid-template-columns: 1fr 15fr 1fr;
    align-items: center;
    word-break: normal;

    ${({ hide }) => hide && css`
        display: none;
    `}
`;

export const Button = styled.button`
    height: 33px;
    width: 33px;
    border-style: none;
    cursor: pointer;
    background-color: red;

    &:hover {
        background-color: rgb(1, 161, 1);
        transition: 1s;
    }

    &:active {
        border: 2px solid black;
    }
`;

export const ButtonDone = styled(Button)`
    background-color: green;
    color: white;
    margin-right: 5px;
`;

export const TaskText = styled.span`
    ${({done}) => done && css`
        text-decoration: line-through;
    `}
`;