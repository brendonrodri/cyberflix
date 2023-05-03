import React from "react"
import * as S from "./style"
import FilmesComponent from "../FIlmsComponent"
import HeaderComponent from "../Header"
import BannerComponent from "../BannerComponent"
export default function MainComponent (){
    return(
        <S.Main id="main">
            <BannerComponent />
            <FilmesComponent />
        </S.Main>
    )
}