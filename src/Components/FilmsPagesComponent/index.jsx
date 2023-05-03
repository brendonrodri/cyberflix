import React from "react"
import { Context } from "../../Services/Context/context"
import * as S from "./style"
export default function FilmsPagesComponent ({titlePage, filmName, filmImage, filmPopularity}){
    const {apidata} = React.useContext(Context)
    return (
        <S.Content>
            {apidata.map((item)=>(
                <S.ItemBox>
                    <S.ItemTitle>{item.title}</S.ItemTitle>
                    <S.ItemImg src={`https://image.tmdb.org/t/p/w200/${item.poster_path}`} alt={item.title} />
                </S.ItemBox>
            ))}
        </S.Content>
    )
}