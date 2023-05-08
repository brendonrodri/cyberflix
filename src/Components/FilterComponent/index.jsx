import React, { useContext } from "react"
import { useState } from "react"
import { Context } from "../../Services/Context/context"
import * as S from "./styles"
export const FilterComponent = () => {
    const [msg, setMsg] = useState('Carregando...')
    const { dataFiltered, input } = useContext(Context)
    const loadingComponent = () => {
        setTimeout(() => {
            setMsg('Sem ddsds   resultados')
        }, 3000)
    }
    const FilterApi = () => {
        if (!input) {
            return
        } else {
            return (
                <>
                    <S.FilterContainer>
                        {dataFiltered.length === 0 ? <h2>{msg}</h2> :
                            dataFiltered.map((item) => (
                                <S.CardBox>
                                    <S.CardTitle>{item.title}</S.CardTitle>
                                    <S.CardImg src={`https://image.tmdb.org/t/p/w200/${item.poster_path}`} alt={item.title} />
                                </S.CardBox>
                            ))}
                    </S.FilterContainer>
                </>
            )
        }
    }
   loadingComponent()
    return (
        <>
            <FilterApi />
        </>
    )
}