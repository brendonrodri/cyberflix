import React from "react"
import styled from "styled-components"
import { useContext } from "react"
import { Context } from "../../Services/Context/context"
import * as S from "./style"

export default function CardModalComponent (title, desc, img, pop, year, lang){
    const {modalActive, setModalActive} = useContext(Context)
    return(
        <S.ModalContainer>
            <S.CloseButton onClick={()=> setModalActive(!modalActive)}>X</S.CloseButton>
            <S.FilmBox>
                <S.ModalImg src={img} alt={title} />
            <S.FilmInfos>
                <S.FilmModalTitle>{title}</S.FilmModalTitle>
                <S.FilmDesc>{desc}</S.FilmDesc>
                <S.FilmList>
                    <li>Popularidade: {pop}</li>
                    <li>Lançamento: {year}</li>
                    <li>Idioma: {lang}</li>
                </S.FilmList>
            </S.FilmInfos>
            </S.FilmBox>
           
        </S.ModalContainer>
    )
}