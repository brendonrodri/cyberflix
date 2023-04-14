import { useContext, useState } from "react"
import Context from "../../Services/Context/context"

const ComponentData = ()=>{
    const [state, setState] = useState([])
    const {apidata} = useContext(Context)
    let data = apidata
    setState(data)
    console.log(state)
    return
}
export default ComponentData