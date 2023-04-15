import React from "react"
import { Route, Routes} from "react-router-dom"
import MainComponent from "../../Components/Main"
import PopularFilmsPage from "../../Pages/PopularFilmsPage"
const RoutesComponent = ()=>{
    return(
        <Routes>
            <Route path="/" component={<MainComponent />} />
            <Route path="/popular" component={<PopularFilmsPage />} />
        </Routes>
    )
}
export default RoutesComponent;