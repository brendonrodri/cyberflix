import React from "react"
import * as S from "./style"
export default function NavBarComponent() {
    return (
        <>
            <S.NavBar>
                <S.NavList>
                    <S.NavListItem>Inicio</S.NavListItem>
                    <S.NavListItem>Populares </S.NavListItem>
                    <S.NavListItem>Recentes</S.NavListItem>
                    <S.NavListItem>Gêneros </S.NavListItem>
                </S.NavList>
            </S.NavBar>
        </>

    )
}