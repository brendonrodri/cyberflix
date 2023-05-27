import { useContext, useEffect } from "react"
import axios from "axios";
import { Context } from "../../Context/context";
export default function GetApi() {
    return (
        GetApiFilms(),
        GetApiSeries(),
        GetApiFilter()
    )
}
const GetApiFilter = () => {
    const { setApiFilter, input } = useContext(Context)
    const options = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/search/movie',
        params: { query: input, include_adult: 'false', language: 'pt-BR', page: '1' },
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NTZmMTdlN2QyZTNkZWU3ZWRlZTk0MzU4NzA2NmIxZSIsInN1YiI6IjY0NTI5ZmU3YzA0NDI5MDEwMTYxNTQwMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vO74LSA42A2gY0T1q7cwqteYusLYQ_ollb1ivDHUEjI'
        }
    };
    useEffect(() => {
        axios.request(options).then(response => setApiFilter(response.data.results))
    }, [input])
}
const GetApiFilms = () => {
    const { setApiData, apiSeriesData, setGlobalData } = useContext(Context)
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=2785fd17cabc7d3339d5a4671f60e34f&language=pt-BR&page=1`).then((response) => {
            const data = response.data.results.concat(apiSeriesData)
            setGlobalData(data)
            setApiData(response.data.results)
        })
    }, [])
}
const GetApiSeries = () => {
    const { setApiSeriesData } = useContext(Context)
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=2785fd17cabc7d3339d5a4671f60e34f&language=pt-BR&page=1`).then((response) => {
            setApiSeriesData(response.data.results)
        })
    }, [])
}