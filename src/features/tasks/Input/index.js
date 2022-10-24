import styled from "styled-components";

const Forms = styled.input`
    border: 2px solid #eee;
    padding: 8px;

    &:hover {
        background-color: rgb(244, 243, 243);
        cursor: text;
    }

    &:active {
        border-color: black;
    }
`;

export default Forms;
