import React, { useState } from "react"
import * as S from "./style"
import { IconContext } from "react-icons"
import {FaFilm} from "react-icons/fa"
import MainComponent from "../Main"
export default function HelloPageComponent (){
    const [state, setState] = useState(false)
    const route = ()=>{
        setState(true)
    }
    return(
        <>
            <S.HelloMain>
                <S.HelloMainSection>
                    <S.Title>Cyberflix</S.Title>
                    <IconContext.Provider value={{size: '21rem', color: 'rgba(250, 240, 250, 0.9)'}}>
                        <FaFilm />
                    </IconContext.Provider>
                </S.HelloMainSection>
                <S.HelloMainSection>
                <a href="#main">
                    <S.HelloPageButton onClick={()=>{route()}}>
                        Entrar
                    </S.HelloPageButton>
                </a>
                </S.HelloMainSection>
            </S.HelloMain>
            {state && <MainComponent />}
        </>
    )
}