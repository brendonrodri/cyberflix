import React,{ createContext, useState } from "react"
export const Context = createContext()
export default function ContextProvider({children}) {
    const [apidata,setApiData] = useState([])
    const [slideIndex, setSlideIndex] = useState({
        indexOne: 0,
        indexTwo: 1
    })
    const [modalActive, setModalActive] = useState(false)
    return(
        <Context.Provider value={{
            apidata, 
            setApiData, 
            slideIndex, 
            setSlideIndex, 
            modalActive, 
            setModalActive
            }}>
            {children}
        </Context.Provider>
    )
}