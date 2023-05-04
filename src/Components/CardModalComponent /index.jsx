import React from "react"
import "./buttonStyle.css"
import {MdPlaylistAdd} from "react-icons/md"
import {BiLike} from "react-icons/bi"
import { IconContext } from "react-icons"
import { useContext } from "react"
import { Context } from "../../Services/Context/context"
import * as S from "./style"

export default function CardModalComponent (title, desc, img, pop, year, lang){
    const {setModalActive} = useContext(Context)
    return(
        <S.ModalContainer id="modal">
                <S.CloseButton onClick={()=> setModalActive({modalFilms: false, modalSeries: false})}>X</S.CloseButton>
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
                <S.ButtonContainer>
                <S.ModalButton>
                    <IconContext.Provider value={{color: '#000', size: '1.5rem',className: "buttonIcon"}}>
                        <MdPlaylistAdd />
                        Minha lista
                    </IconContext.Provider>
                   
                </S.ModalButton>
                <S.ModalButton>
                    <IconContext.Provider value={{color: '#000', size: '1.3rem', className: "buttonIcon" }}>
                        <BiLike />
                        Favoritar
                    </IconContext.Provider>
                </S.ModalButton>
            </S.ButtonContainer>
            </S.FilmInfos>
           
            </S.FilmBox>
            
        </S.ModalContainer>
    )
}