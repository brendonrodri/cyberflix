import React,{ createContext, useContext, useState } from "react"
export  const Context = createContext()

export default function ContextProvider({children}) {
    const [state, setState] = useState({})
    const [apidata,setApiData] = useState({})
    return(
        <Context.Provider value={{state, setState, apidata, setApiData}}>
            {children}
        </Context.Provider>
    )
}