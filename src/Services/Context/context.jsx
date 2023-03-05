import React,{ createContext, useState } from "react"
export const Context = createContext()
export default function ContextProvider({children}) {
    const [apidata,setApiData] = useState([])
    console.log(apidata)
    return(
        <Context.Provider value={{apidata, setApiData}}>
            {children}
        </Context.Provider>
    )
}