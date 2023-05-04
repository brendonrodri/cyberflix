import React from "react"
import { Link } from "react-router-dom"
import * as S from "./style"
export default function NavBarComponent() {
    return (
        <>
            <S.NavBar>
                <S.NavList>
                    <S.NavListItem><Link to="/">Início</Link></S.NavListItem>
                    <S.NavListItem><Link to="/Populares"> Populares </Link> </S.NavListItem>
                    <S.NavListItem><Link to="/Series">Séries</Link></S.NavListItem>
                    <S.NavListItem>Gêneros </S.NavListItem>
                </S.NavList>
            </S.NavBar>
        </>

    )
}