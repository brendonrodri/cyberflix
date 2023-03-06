import React from "react"
import * as S from "./style"
import { FilmsComponet } from "../FIlmsComponent"
import HeaderComponent from "../Header"
import BannerComponent from "../BannerComponent"
export default function MainComponent (){
    return(
        <S.Main id="main">
            <HeaderComponent />
            <BannerComponent />
            <FilmsComponet />
        </S.Main>
    )
}