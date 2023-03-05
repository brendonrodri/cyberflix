import React from "react"
import * as S from "./style"
import { IconContext } from "react-icons"
import {FaFilm} from "react-icons/fa"
export default function HelloPageComponent (){
    return(
        <S.HelloMain>
            <S.HelloMainSection>
                <S.Title>Cyberflix</S.Title>
                <IconContext.Provider value={{size: '21rem', color: 'rgba(250, 240, 250, 0.9)'}}>
                    <FaFilm />
                </IconContext.Provider>
            </S.HelloMainSection>
            <S.HelloMainSection>
                <S.HelloPageButton>Entrar</S.HelloPageButton>
            </S.HelloMainSection>
        </S.HelloMain>
    )
}