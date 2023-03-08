// refatorar o componente e transformar em um componente com props
// procurar uma lógica para passar os dados da api via props 

import React, { useContext } from "react"
import { Context } from "../../Services/Context/context"
import * as S from "./style"
export function FilmsComponet (){
    const {apidata} = useContext(Context)
    return(
        <>
            <S.ComponentTitle>
                <h1>Populares</h1>
            </S.ComponentTitle>
            <S.FilmsContainer>
                <S.FilmsSection>
                    {apidata.map((item)=>(
                        <S.FilmsBox>
                            <S.FilmImg src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt={item.title} />
                            <S.FilmInfos>
                                <S.FilmName>{item.title}</S.FilmName>
                                <S.FilmDate>{item.release_date}</S.FilmDate>
                            </S.FilmInfos>
                        </S.FilmsBox>
                    ))}
                </S.FilmsSection>
            </S.FilmsContainer>
        </>
        
        
    )
}