import React, { useContext } from "react"
import "./buttonStyle.css"
import { MdPlaylistAdd, MdClose } from "react-icons/md"
import { BiLike } from "react-icons/bi"
import { IconContext } from "react-icons"
import { Context } from "../../Services/Context/context"
import * as S from "./style"
import FilmsComponent from "../ContentSlide/filmes"
import SeriesComponent from "../ContentSlide/series"
export function CardModalComponent(id, title, desc, img, background, pop, year, lang) {
    const { setModalActive, modalActive, apidata, apiSeriesData, favList, setFavList } = useContext(Context)

    return (
        <S.ModalContainer id="modal" /* back={background} */ /* style={{ backgroundImage: `url(${modalItem.background})`}} */>
            <div style={{ backgroundImage: `url(${background})`, backgroundSize: '100%' }}>
                <S.CloseButton onClick={() => setModalActive({ modalFilms: false, modalSeries: false, isOn: true })}>
                    <IconContext.Provider value={{ size: '2.4rem' }}>
                        <MdClose />
                    </IconContext.Provider>
                </S.CloseButton>
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
                            <S.ModalButton style={{ display: 'flex', alignItems: 'center' }} >
                                <IconContext.Provider value={{ color: '#000', size: '1.5rem', className: "buttonIcon" }}>
                                    <MdPlaylistAdd />
                                    Minha lista
                                </IconContext.Provider>
                            </S.ModalButton>
                            <S.ModalButton>
                                <IconContext.Provider value={{ color: '#000', size: '1.3rem', className: "buttonIcon" }}>
                                    <BiLike />
                                    Favoritar
                                </IconContext.Provider>
                            </S.ModalButton>
                        </S.ButtonContainer>
                    </S.FilmInfos>
                </S.FilmBox>
            </div>
            {modalActive.modalFilms === true ? <FilmsComponent /> : ''}
            {modalActive.modalSeries === true ? <SeriesComponent /> : ''}
        </S.ModalContainer>
    )
}
export default function ModalComponent() {
    const { modalActive, modalItem } = useContext(Context);
    return (
        <>
            {modalActive.modalSeries === true &&
                CardModalComponent(
                    modalItem.id,
                    modalItem.title,
                    modalItem.description,
                    modalItem.img,
                    modalItem.background,
                    modalItem.popularity,
                    modalItem.lang,
                    modalItem.year,
                    modalItem.component
                )
            }
            {modalActive.modalFilms === true &&
                CardModalComponent(
                    modalItem.id,
                    modalItem.title,
                    modalItem.description,
                    modalItem.img,
                    modalItem.background,
                    modalItem.popularity,
                    modalItem.lang,
                    modalItem.year,
                    modalItem.component
                )
            }
        </>

    )
}