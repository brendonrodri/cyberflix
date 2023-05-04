import React from "react"
import { Context } from "../../Services/Context/context"
import * as S from "../style"
export default function FilmsPagesComponent ({titlePage, filmName, filmImage, filmPopularity}){
    const {apidata} = React.useContext(Context)
    return (
        <S.PageContainer>
            {apidata.map((item)=>(
                <S.CardBox>
                    <S.CardTitle>{item.title}</S.CardTitle>
                    <S.CardImg src={`https://image.tmdb.org/t/p/w200/${item.poster_path}`} alt={item.title} />
                </S.CardBox>
            ))}
        </S.PageContainer>
    )
}