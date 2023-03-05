import axios from "axios";
const GetApi = ()=>{
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=2785fd17cabc7d3339d5a4671f60e34f&language=pt-BR&page=2`).then((response)=>{
        console.log(response.data)
    })  
}
export default GetApi;