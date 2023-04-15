import React from "react"
import { useContext } from "react"
import { Context } from "../../Services/Context/context"
import * as S from "./style"
export default function CardModalComponent (title, img){
    const {modalActive, setModalActive} = useContext(Context)
    return(
        <S.ModalContainer>
            <button onClick={()=> setModalActive(!modalActive)}>X</button>
            <h2>{title}</h2>
            <img src={img} alt={title} />
        </S.ModalContainer>
    )
}