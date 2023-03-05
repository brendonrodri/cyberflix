import React from "react"
import { IconContext } from "react-icons"
import {FaFilm} from "react-icons/fa"
import * as S from "./style"
export const LogoHeaderComponent = () =>{
    return(
    <S.LogoContainer>
        <IconContext.Provider value={{size: '5rem'}}>
            <FaFilm />
        </IconContext.Provider>
    </S.LogoContainer>
)
}