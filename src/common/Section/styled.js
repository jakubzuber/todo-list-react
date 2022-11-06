import styled from "styled-components";

export const SectionClass = styled.section`
    display: flex;
    flex-direction: column;
`;

export const SectionTitle = styled.h2`
    background-color: white;
    padding: 15px;
    margin: 7px 20px 1px 20px;
    display: grid;
    grid-template-columns: 3fr 2fr;
    align-items: center;

    @media (max-width: 767px) {
        grid-template-columns: 1fr;
        text-align: center;
    }
`;