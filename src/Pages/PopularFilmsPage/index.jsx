import React, {useContext} from 'react'
import FilmsPagesComponent from '../../Components/FilmsPagesComponent'
import { Context } from "../../Services/Context/context"
const PopularFilmsPage =()=>{
    const {apidata} = useContext(Context)
    return apidata.map((data)=>(
        <FilmsPagesComponent 
            titlePage="Filmes Populares" 
            filmTitle={data.title}
            filmImage={`https://image.tmdb.org/t/p/w200/${data.poster_path}`}
            filmPopularity={data.popularity}
             />
    ))
}
export default PopularFilmsPage