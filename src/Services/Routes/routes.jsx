import React from "react"
import { Route, Routes} from "react-router-dom"
import HelloPage from "../Pages/Index"
import MainComponent from "../../Components/Main"
const RoutesComponent = ()=>{
    return(
        <Routes>
            <Route path="/" component={<HelloPage />} />
            <Route path="/main" component={<MainComponent />} />
        </Routes>
    )
}
export default RoutesComponent;