import React, { useContext} from "react"
import {GrNext, GrPrevious} from "react-icons/gr"
import { IconContext } from "react-icons"
import { Context } from "../../Services/Context/context"
import * as S from "./style"
export default function SlideComponent (){
    const {apidata, slideIndex, setSlideIndex} = useContext(Context)
    let sliceIndexOne = slideIndex.indexOne 
    let sliceIndexTwo = slideIndex.indexTwo
    let dataComponent =  apidata.slice(sliceIndexOne,sliceIndexTwo)
    const nextIndex = ()=>{
        if(sliceIndexOne === 5 && sliceIndexTwo ===6 ){
            return
        }else{
            setSlideIndex({
                indexOne: slideIndex.indexOne + 1,
                indexTwo: slideIndex.indexTwo + 1
            })
        }
    }
    const prevIndex = ()=>{
        if(sliceIndexOne === 0 && sliceIndexTwo === 1 ){
            return
        }else{
            setSlideIndex({
                indexOne: slideIndex.indexOne - 1,
                indexTwo: slideIndex.indexTwo - 1
            })
        }
    }
    return(
        <S.SlideContainer>
                {dataComponent.map((item)=>(
                    <S.SlideContent >  
                            <S.MovieCard style={{backgroundImage: `url(https://image.tmdb.org/t/p/w500/${item.backdrop_path})`}}>
                                <S.SlideImage src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt={item.title}/>
                                <S.BoxInfos>
                                    <S.SlideTitle>{item.title}</S.SlideTitle>
                                    <S.SlideListInfos>
                                        <S.SlideListItem>Nota: {item.vote_average}</S.SlideListItem>
                                        <S.SlideListItem>Popularidade: {item.popularity}</S.SlideListItem>
                                        <S.SlideListItem>Idioma original: {item.original_language}</S.SlideListItem>
                                        <S.SlideListItem>Ano: {item.release_date}</S.SlideListItem>   
                                    </S.SlideListInfos>
                                </S.BoxInfos>
                            </S.MovieCard>
                        <S.ButtonsBox>
                            <IconContext.Provider value={{color: 'white', size: '3rem'}}>
                            <S.SlideButton onClick={()=> prevIndex()}>
                                <GrPrevious />
                            </S.SlideButton>
                            <S.SlideButton onClick={()=>nextIndex()}>
                                <GrNext />
                            </S.SlideButton>  
                            </IconContext.Provider>  
                        </S.ButtonsBox>
                    </S.SlideContent>
                ))}
        </S.SlideContainer>
    )
}