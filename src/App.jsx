import React from "react"
import { Routes, Route, BrowserRouter } from "react-router-dom"
import HeaderComponent from "./Components/Header"
import MainComponent from "./Components/Main"
import PopularFilmsPage from "./Pages/PopularFilmsPage"
import GetApi from "./Services/API/MovieAPI"
import GlobalStyle from "./Services/GlobalStyle/style"
export default function App() {
    return (
        <>
            <GlobalStyle />
            <GetApi />
            <BrowserRouter>
                <HeaderComponent />
                <Routes>
                    <Route path="/" element={<MainComponent />} />
                    <Route path="/Populares" element={<PopularFilmsPage/>}/>
                </Routes>
            </BrowserRouter>
        </>

    )
}