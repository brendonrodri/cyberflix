import { useContext, useEffect } from "react";
import axios from "axios";
import { Context } from "../../Context/context";

const GetApi = () => {
    const { setApiFilter, setTopRatedSeries, setTopRated, setApiData, setUpcommingFilms, setApiSeriesData, input } = useContext(Context);

    useEffect(() => {
        const getApiFilter = async () => {
            try {
                const options = {
                    method: 'GET',
                    url: 'https://api.themoviedb.org/3/search/movie',
                    params: { query: input, include_adult: 'false', language: 'pt-BR', page: '1' },
                    headers: {
                        accept: 'application/json',
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NTZmMTdlN2QyZTNkZWU3ZWRlZTk0MzU4NzA2NmIxZSIsInN1YiI6IjY0NTI5ZmU3YzA0NDI5MDEwMTYxNTQwMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vO74LSA42A2gY0T1q7cwqteYusLYQ_ollb1ivDHUEjI'
                    }
                };

                const response = await axios.request(options);
                setApiFilter(response.data.results);
            } catch (error) {
                alert(error);
            }
        };

        const getTopRated = async () => {
            try {
                const options = {
                    method: 'GET',
                    url: 'https://api.themoviedb.org/3/movie/top_rated',
                    params: { language: 'pt-BR', page: '1' },
                    headers: {
                        accept: 'application/json',
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NTZmMTdlN2QyZTNkZWU3ZWRlZTk0MzU4NzA2NmIxZSIsInN1YiI6IjY0NTI5ZmU3YzA0NDI5MDEwMTYxNTQwMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vO74LSA42A2gY0T1q7cwqteYusLYQ_ollb1ivDHUEjI'
                    }
                };

                const response = await axios.request(options);
                setTopRated(response.data.results);
                console.log(response.data.results);
            } catch (error) {
                console.error(error);
            }
        };

        const getApiFilms = async () => {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=2785fd17cabc7d3339d5a4671f60e34f&language=pt-BR&page=1`);
                setApiData(response.data.results);
            } catch (error) {
                console.error(error);
            }
        };

        const getUpCommingFilms = async () => {
            try {
                const options = {
                    method: 'GET',
                    url: 'https://api.themoviedb.org/3/movie/upcoming',
                    params: { language: 'pt-BR', page: '1' },
                    headers: {
                        accept: 'application/json',
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NTZmMTdlN2QyZTNkZWU3ZWRlZTk0MzU4NzA2NmIxZSIsInN1YiI6IjY0NTI5ZmU3YzA0NDI5MDEwMTYxNTQwMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vO74LSA42A2gY0T1q7cwqteYusLYQ_ollb1ivDHUEjI'
                    }
                };

                const response = await axios.request(options);
                setUpcommingFilms(response.data.results);
                console.log(response.data.results);
            } catch (error) {
                console.error(error);
            }
        };

        const getApiSeries = async () => {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=2785fd17cabc7d3339d5a4671f60e34f&language=pt-BR&page=1`);
                setApiSeriesData(response.data.results);
            } catch (error) {
                console.error(error);
            }
        };

        const getTopRatedSeries = async () => {
            try {
                const options = {
                    method: 'GET',
                    url: 'https://api.themoviedb.org/3/tv/top_rated',
                    params: { language: 'pt-BR', page: '1' },
                    headers: {
                        accept: 'application/json',
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NTZmMTdlN2QyZTNkZWU3ZWRlZTk0MzU4NzA2NmIxZSIsInN1YiI6IjY0NTI5ZmU3YzA0NDI5MDEwMTYxNTQwMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vO74LSA42A2gY0T1q7cwqteYusLYQ_ollb1ivDHUEjI'
                    }
                };

                const response = await axios.request(options)
                setTopRatedSeries(response.data.results)
            } catch (error) {
                console.log(error)
            }
        }

        getApiFilter();
        getTopRated();
        getApiFilms();
        getUpCommingFilms();
        getApiSeries();
        getTopRatedSeries()
    }, [input, setApiData, setApiFilter, setApiSeriesData, setTopRated, setTopRatedSeries, setUpcommingFilms]);

    return null;
};

export default GetApi;
