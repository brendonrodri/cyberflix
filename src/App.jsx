import React from "react"
import MainComponent from "./Components/Main"
import GetApi from "./Services/API/MovieAPI"
import GlobalStyle from "./Services/GlobalStyle/style"
import HelloPage from "./Services/Pages/Index"
export default function App (){
    return(
        <>  
            <GlobalStyle />    
            <GetApi />
            <MainComponent />
        </>
    )
}