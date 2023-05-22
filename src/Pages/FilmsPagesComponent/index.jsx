import React from "react"
import { useState } from "react"
import { Context } from "../../Services/Context/context"
import * as S from "../style"
export default function FilmsPagesComponent({ titlePage, filmName, filmImage, filmPopularity }) {
    const [modal, setModal] = useState(false)
    const { apidata } = React.useContext(Context)

    const activeModal = (id) => {
        let verifyId = apidata.map((item) => {
            if (item.id === id) {
                setModal(!modal)
            }
        })
        return verifyId
    }
    return (
        <S.PageContainer>
            {apidata.map((item) => (
                <S.CardBox key={item.id} onClick={() => activeModal(item.id)} animationCard={modal === true
                    ? 'slidecard 1s ease-in-out 0s 1 normal none'
                    : ''
                }>
                    <S.CardImg src={`https://image.tmdb.org/t/p/w200/${item.poster_path}`} alt={item.title} />
                    <S.CardTitle isOn={'block'}>{item.title}</S.CardTitle>
                </S.CardBox>
            ))}
        </S.PageContainer>
    )
}