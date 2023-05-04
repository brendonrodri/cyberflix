import React from "react"
import * as S from "./style"
import CarouselComponent from "../ContentSlide/index"
import BannerComponent from "../BannerComponent"
export default function MainComponent (){
    return(
        <S.Main id="main">
            <BannerComponent />
            <CarouselComponent />
        </S.Main>
    )
}