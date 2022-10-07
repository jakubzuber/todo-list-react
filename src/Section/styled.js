import styled from "styled-components";

export const SectionClass = styled.section`
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
`;

export const SectionTitle = styled.h2`
    background-color: white;
    font-size: 20px;
    padding: 15px;
    margin: 7px 20px 1px 20px;
    display: grid;
    grid-template-columns: 3fr 2fr;

    @media (max-width: 767px) {
    .section__header {
        grid-template-columns: 1fr;
        text-align: center;
    }
    }
`;