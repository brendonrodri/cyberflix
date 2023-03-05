import React from "react"
import HeaderComponent from "./Components/Header"
import MainComponent from "./Components/Main"
import GetApi from "./Services/API/MovieAPI"
import ContextProvider from "./Services/Context/context"
import GlobalStyle from "./Services/GlobalStyle/style"
export default function App (){
    return(
        <ContextProvider>
            <GlobalStyle />    
            <GetApi />
            <HeaderComponent />
            <MainComponent />
        </ContextProvider>
    )
}