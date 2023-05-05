import React,{ createContext, useState } from "react"
export const Context = createContext()
export default function ContextProvider({children}) {
    const [apidata,setApiData] = useState([])
    const [apiSeriesData, setApiSeriesData] = useState([])
    const [slideIndex, setSlideIndex] = useState({
        indexOne: 0,
        indexTwo: 1
    })
    const [modalItem, setModalItem] = useState({
        title: undefined,
        description: undefined,
        img: undefined,
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
    return(
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
            setModalItem
            }}>
            {children}
        </Context.Provider>
    )
}