import React, { createContext, useState } from "react"
export const Context = createContext()
export default function ContextProvider({ children }) {
    const [apidata, setApiData] = useState([])
    const [topRated, setTopRated] = useState([])
    const [apiSeriesData, setApiSeriesData] = useState([])
    const [topRatedSeries, setTopRatedSeries] = useState([])
    const [upcommingFilms, setUpcommingFilms] = useState([])
    const [globalData, setGlobalData] = useState([])
    const [slideIndex, setSlideIndex] = useState({
        indexOne: 0,
        indexTwo: 1
    })
    const [modalItem, setModalItem] = useState({
        id: undefined,
        title: undefined,
        description: undefined,
        img: undefined,
        background: undefined,
        popularity: undefined,
        lang: undefined,
        year: undefined,
        component: undefined

    })
    const [modalActive, setModalActive] = useState({
        modalFilms: undefined,
        modalSeries: undefined,
        isOn: true
    })
    const [input,
        setInput] = useState()
    const [dataFiltered, setDatFiltered] = useState()
    const [apiFilter, setApiFilter] = useState([])
    const [favList, setFavList] = useState([])
    return (
        <Context.Provider value={{
            apidata,
            setApiData,
            apiSeriesData,
            setApiSeriesData,
            slideIndex,
            setSlideIndex,
            modalActive,
            setModalActive,
            modalItem,
            setModalItem,
            input,
            setInput,
            dataFiltered,
            setDatFiltered,
            apiFilter,
            setApiFilter,
            favList,
            setFavList,
            globalData,
            setGlobalData,
            topRated,
            setTopRated,
            upcommingFilms,
            setUpcommingFilms,
            topRatedSeries, setTopRatedSeries
        }}>
            {children}
        </Context.Provider>
    )
}