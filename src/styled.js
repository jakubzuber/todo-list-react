import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNavList = styled.ul`
    background-color: teal;
    padding: 10px;
    margin: 20px 0px;
    display: grid;
    grid-template-columns: max-content max-content max-content;
    justify-content: center;
    list-style-type: none;
`;

export const StyledNavListItem = styled.li`
    margin: 10px;
    transition: 0.5s;
    &:hover{
        transform: scale(1.40);
    }
`;

export const StyledNavLink = styled(NavLink)`
    color:white;
    font-weight: 400;
    text-decoration: none;
    
    &.active{
        font-weight: 700;
    };
`;