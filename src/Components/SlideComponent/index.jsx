import React, { useContext } from "react"
import { Context } from "../../Services/Context/context"
import * as S from "./style"
export default function SlideComponent (){
    const {apidata} = useContext(Context)
    let dataComponent =  apidata.slice(1,2)
    return(
        <S.SlideContainer>
            <S.SlideContent>
                {dataComponent.map((item)=>(
                    <>  
                        <S.BoxImage>
                            <S.SlideImage src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`} alt={item.title} />
                        </S.BoxImage>
                        <S.BoxInfos>
                            <S.SlideTitle>{item.title}</S.SlideTitle>
                            <S.SlideListInfos>
                                <S.SlideListItem>Idioma original: {item.original_language}</S.SlideListItem>
                                <S.SlideListItem>Ano: {item.release_date}</S.SlideListItem>
                                <S.SlideListItem>Popularidade: {item.popularity}</S.SlideListItem>
                                <S.SlideListItem>Nota: {item.vote_average}</S.SlideListItem>
                                <S.SlideListItem></S.SlideListItem>
                            </S.SlideListInfos>
                        </S.BoxInfos>
                    </>
                ))}
               
            </S.SlideContent>
        </S.SlideContainer>
    )
}