import React,{ createContext, useState } from "react"
export const Context = createContext()
export default function ContextProvider({children}) {
    const [apidata,setApiData] = useState([])
    const [slideIndex, setSlideIndex] = useState({
        indexOne: 0,
        indexTwo: 1
    })
    const [modalIndex, setModalIndex] = useState({
        indexOne: 0,
        indexTwo: 1
    })
    console.log(apidata)
    return(
        <Context.Provider value={{apidata, setApiData, slideIndex, setSlideIndex,modalIndex, setModalIndex}}>
            {children}
        </Context.Provider>
    )
}