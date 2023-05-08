import React, { useContext} from "react"
/* import {GrNext, GrPrevious} from "react-icons/gr"
import { IconContext } from "react-icons" */
import { Context } from "../../Services/Context/context"
import * as S from "./style"
export default function SlideComponent (){
    const {apidata} = useContext(Context)
    let dataComponent =  apidata.slice(7,8)

    return(
        <S.SlideContainer>
                {dataComponent.map((item)=>(
                    <S.SlideContent >  
                            <S.MovieCard style={{backgroundImage: `url(https://image.tmdb.org/t/p/w500/${item.backdrop_path})`}}>
                                <S.SlideImage src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt={item.title}/>
                                <S.BoxInfos>
                                    <S.SlideTitle>{item.title}</S.SlideTitle>
                                    <S.SlideOverView>{item.overview}</S.SlideOverView>
                                    <S.SlideListInfos>
                                        <S.SlideListItem>Nota: {item.vote_average}</S.SlideListItem>
                                        <S.SlideListItem>Popularidade: {item.popularity}</S.SlideListItem>
                                        <S.SlideListItem>Idioma original: {item.original_language}</S.SlideListItem>
                                        <S.SlideListItem>Ano: {item.release_date}</S.SlideListItem>   
                                    </S.SlideListInfos>
                                </S.BoxInfos>
                            </S.MovieCard>
                    </S.SlideContent>
                ))}
        </S.SlideContainer>
    )
}