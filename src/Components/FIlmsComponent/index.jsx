/* // refatorar o componente e transformar em um componente com props
// procurar uma lógica para passar os dados da api via props 

import React, { useContext, useState } from "react"
import { Context } from "../../Services/Context/context"
import CardModalComponent from "../CardModalComponent "
import * as S from "./style"
export function FilmsComponet (){
    const {apidata} = useContext(Context)
    const [modal, setModal] = useState(false)
    const openModal = () => setModal(!modal)
    return(
        <>
            <S.ComponentTitle>
                <h1>Populares</h1>
            </S.ComponentTitle>
            {modal && <CardModalComponent />}
            <S.FilmsContainer>
                <S.FilmsSection>
                    {apidata.map((item)=>( 
                        <S.FilmsBox onClick={()=> openModal()}>
                            <S.FilmImg src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt={item.title} 
                            />
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


 */


import React, { useContext, useState } from "react"
import * as S from "./style"
import { Context } from "../../Services/Context/context"


export default function FilmesComponent(){
    const [modal, setModal] = useState(false)
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
                            <p>{item.title}</p>
                            <S.FilmImg src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt={item.title} 
                            />
                        </S.FilmsBox>
                    ))}
                </S.FilmsSection>
            </S.FilmsContainer>
            </>
    )
    
}