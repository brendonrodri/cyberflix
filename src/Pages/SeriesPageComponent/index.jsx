import React, { useContext } from "react"
import { Context } from "../../Services/Context/context"
import * as S from "../style"
export default  function SeriesComponent(){
    const {apiSeriesData} = useContext(Context)
    return(
        <S.PageContainer>
            {apiSeriesData.map((data)=>(
                <S.CardBox>
                    <S.CardTitle>{data.name}</S.CardTitle>
                    <S.CardImg src={`https://image.tmdb.org/t/p/w200/${data.poster_path}`} />
                </S.CardBox>
            ))}
        </S.PageContainer>
    )
}