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

export const ButtonDone = styled.button`
    background-color: green;
    color: white;
    height: 33px;
    width: 33px;
    border-style: none;
    margin-right: 5px;

    &:hover {
    background-color: rgb(1, 161, 1);
    cursor: pointer;
    transition: 1s;
    }

    &:active {
    border: 2px solid black;
    }
`;

export const ButtonRemove = styled.button`
    background-color: red;
    height: 33px;
    width: 33px;
    border-style: none;
    cursor: pointer;

    &:hover {
    background-color: rgb(232, 118, 118);
    transition: 1s;
    }

    &:active {
    border: 2px solid black;
    }
`;

export const TaskText = styled.span`
    ${({done}) => done && css`
    text-decoration: line-through;
    `}
`;