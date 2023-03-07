import React from "react"
import { LogoHeaderComponent } from "../LogoHeader"
import NavBarComponent from "../NavBarComponent"
import SearchBarInput from "../SearchBarComponent"
import * as S from "./style"
export default function HeaderComponent(){
    return(
        <S.HeaderContainer>
            <NavBarComponent />
            <SearchBarInput />
            <LogoHeaderComponent />
        </S.HeaderContainer>
    )
}