import { useContext, useEffect} from "react"
import axios from "axios";
import { Context } from "../../Context/context";
const GetApi = ()=>{
    const {setApiData} = useContext(Context)
        useEffect(()=>{
            axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=2785fd17cabc7d3339d5a4671f60e34f&language=pt-BR&page=1`).then((response)=>{
                setApiData(response.data.results)
                console.log(response.data.results)
        })
        },[setApiData])
}
export default GetApi;