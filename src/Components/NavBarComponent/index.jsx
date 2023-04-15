import React from "react"
import { Route, Routes, Link} from "react-router-dom"
import MainComponent from "../../Components/Main"
import PopularFilmsPage from "../../Pages/PopularFilmsPage"
import * as S from "./style"
export default function NavBarComponent() {
    return (
        <>
            <S.NavBar>
                <S.NavList>
                    <S.NavListItem><Link to="/"> Início </Link></S.NavListItem>
                    <S.NavListItem><Link to="/popular">Populares </Link></S.NavListItem>
                    <S.NavListItem>Recentes</S.NavListItem>
                    <S.NavListItem>Gêneros </S.NavListItem>
                </S.NavList>
            </S.NavBar>
            <Routes>
                <Route path="/" component={<MainComponent />} />
                <Route path="/popular" component={<PopularFilmsPage />} />
            </Routes>
        </>

    )
}