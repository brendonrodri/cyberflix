import React, { useContext, useEffect } from "react"
import * as S from "./style"
import GetApi from "../../Services/API/MovieAPI"
import { FilmsComponet } from "../FIlmsComponent"
export default function MainComponent (){
    return(
        <S.Main>
            <FilmsComponet />
        </S.Main>
    )
}