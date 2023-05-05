import  React ,{useContext} from "react"
import { Context } from "../../Services/Context/context"

export const FilterComponent = () =>{
     const {dataFiltered, input} = useContext(Context)
     const FilterApi = () =>{
        if(!input){
            return
        }else{
           return(
                <h2>
                    {dataFiltered.map((item) =>(
                <>
                    {item.title}
                </>
            ))}
           </h2>
           )
        }
     }
    return(
        <>
           <FilterApi />
        </>
    )
}