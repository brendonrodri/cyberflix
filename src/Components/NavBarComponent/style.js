import styled from "styled-components";
import {Link} from "react-router-dom"
export const NavBar = styled.nav`
    width: 65%;
    height: 15vh;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const NavList = styled.ul`
    width: 90%;
    height: 20vh;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`
export const NavListItem = styled.li`
    list-style: none;
    font-size: 1.4rem;
    font-weight: 500;
    color: rgba(250, 240, 250, 0.9);
    a{
        color: rgba(250, 240, 250, 0.9);
        text-decoration: none;
    }
    :hover{
        transform: scale(1.2);
        text-decoration: underline;
    }
`
