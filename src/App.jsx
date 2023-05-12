import React from "react"
import { Routes, Route, BrowserRouter } from "react-router-dom"
import { FilterComponent } from "./Components/FilterComponent"
import HeaderComponent from "./Components/Header"
import MainComponent from "./Components/Main"
import FavComponent from "./Pages/FavPage"
import FilmsPagesComponent from "./Pages/FilmsPagesComponent/index"
import SeriesComponent from "./Pages/SeriesPageComponent"
import GetApi from "./Services/API/MovieAPI"
import GlobalStyle from "./Services/GlobalStyle/style"
export default function App() {

    return (
        <>
            <GlobalStyle />
            <GetApi />
            <BrowserRouter>
                <HeaderComponent />
                <FilterComponent />
                <Routes>
                    <Route path="/" element={<MainComponent />} />
                    <Route path="/Populares" element={<FilmsPagesComponent />} />
                    <Route path="/Series" element={<SeriesComponent />} />
                    <Route path="/Favoritos" element={<FavComponent />} />
                </Routes>
            </BrowserRouter>
        </>

    )
}