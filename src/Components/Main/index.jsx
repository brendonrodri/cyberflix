import React from "react"
import * as S from "./style"
import { FilmsComponet } from "../FIlmsComponent"
import HeaderComponent from "../Header"
export default function MainComponent (){
    return(
        <S.Main id="main">
            <HeaderComponent />
            <FilmsComponet />
        </S.Main>
    )
}