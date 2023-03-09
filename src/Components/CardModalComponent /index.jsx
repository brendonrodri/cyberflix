import React, { useContext } from "react"
import { Context } from "../../Services/Context/context"
import * as S from "./style"
export default function CardModalComponent (){
    const {apidata, modalIndex} = useContext(Context);
    let indexOne = modalIndex.indexOne;
    let indexTwo = modalIndex.indexTwo;
    const modalData = apidata.slice(indexOne, indexTwo)
    return(
        <S.ModalContainer>
            {modalData.map(item => <h1>{item.title}</h1>)}
        </S.ModalContainer>
    )
}