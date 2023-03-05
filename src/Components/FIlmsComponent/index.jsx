import React, { useContext } from "react"
import { Context } from "../../Services/Context/context"
import * as S from "./style"
export function FilmsComponet (){
    const {apidata} = useContext(Context)
    return(
        <S.FilmsContainer>
            {apidata.map((item)=>(
                <S.FilmsBox>
                    <S.FilmImg src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt={item.title} />
                    <S.FilmInfos>
                        <S.FilmName>{item.title}</S.FilmName>
                        <S.FilmDate>{item.release_date}</S.FilmDate>
                    </S.FilmInfos>
                </S.FilmsBox>
            ))}
        </S.FilmsContainer>
    )
}