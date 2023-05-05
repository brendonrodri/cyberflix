import  React ,{useContext} from "react"
import { Context } from "../../Services/Context/context"
import * as S from "./styles"
export const FilterComponent = () =>{
     const {dataFiltered, input} = useContext(Context)
     const FilterApi = () =>{
        if(!input){
            return
        }else{
           return(
                <S.FilterContainer>
                    {dataFiltered.map((item) =>(
                <S.CardBox>
                   <S.CardTitle>{item.title}</S.CardTitle>
                   <S.CardImg src={`https://image.tmdb.org/t/p/w200/${item.poster_path}`} alt={item.title} />
                </S.CardBox>
            ))}
           </S.FilterContainer>
           )
        }
     }
    return(
        <>
           <FilterApi />
        </>
    )
}