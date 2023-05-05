import React, {useContext} from "react"
import * as S from "./style"
import { Context } from "../../Services/Context/context"
import CarouselComponent from "../ContentSlide/index"
import ModalComponent from "../CardModalComponent "
import BannerComponent from "../BannerComponent"
export default function MainComponent (){
    const { modalActive} = useContext(Context)
    return(
        <S.Main id="main">
            {modalActive.modalFilms || modalActive.modalSeries === true ? 
            <>
                <ModalComponent />
            </> : ''}
            {modalActive.isOn && 
                <>  <BannerComponent />
                    <CarouselComponent />    
                </>
            }
            
        </S.Main>
    )
}