import React, {useContext} from "react"
import { Context } from "../../Services/Context/context"
import {FaSearch} from "react-icons/fa"
import { IconContext } from "react-icons"
import * as S from "./style"
const SearchBarInput = () => {
    const {input, setInput, apidata, setDatFiltered} = useContext(Context)
    const apiFilter = () =>{
        let data = apidata.filter((prevState)=>{
            if(!input){
                return
            }else if(
                prevState.title.toLocaleLowerCase().includes(input.toLocaleLowerCase())
            ){
                return prevState
            }
        })
        setDatFiltered(data)
    }
    return( 
        <S.SearchBarContainer>
            <S.SearchBar value={input} onChange={(e)=>{
                setInput(e.target.value)
                apiFilter()
            }} />
            <IconContext.Provider value={{size: '1.3rem', color: 'rgba(250, 240, 250, 0.9)'}}>
                <FaSearch />
            </IconContext.Provider>
        </S.SearchBarContainer>
)}
export default SearchBarInput;