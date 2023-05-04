import { useContext, useEffect} from "react"
import axios from "axios";
import { Context } from "../../Context/context";

export default function GetApi (){
    return(
        GetApiFilms(),
        GetApiSeries()
    )
}
const GetApiFilms = ()=>{
    const {setApiData} = useContext(Context)
        useEffect(()=>{
            axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=2785fd17cabc7d3339d5a4671f60e34f&language=pt-BR&page=1`).then((response)=>{
                setApiData(response.data.results)
        })
        },[setApiData])
}
const GetApiSeries = () =>{
    const {setApiSeriesData} = useContext(Context)
        useEffect(()=>{
            axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=2785fd17cabc7d3339d5a4671f60e34f&language=pt-BR&page=1`).then((response)=>{
                setApiSeriesData(response.data.results)             
            })
        }, [setApiSeriesData])
}