import React, { useContext, useState } from "react"
import { Context } from "../../Services/Context/context"
import { FaSearch } from "react-icons/fa"
import { IconContext } from "react-icons"
import * as S from "./style"
const SearchBarInput = () => {
    const [isOn, setIsOn] = useState(false)
    const { input, setInput, setDatFiltered, apiFilter } = useContext(Context)
    const filter = () => {
        let data = apiFilter.filter((prevState) => {
            if (!input) {
                return
            } else if (
                prevState.title.toLocaleLowerCase().includes(input.toLocaleLowerCase())
            ) {
                return prevState
            }
        })
        setDatFiltered(data)
    }
    return (
        <S.SearchBarContainer>
            {isOn && <S.SearchBar value={input} onChange={(e) => {
                setInput(e.target.value)
                filter()
            }} />}

            <IconContext.Provider value={{ size: '1.3rem', color: 'rgba(250, 240, 250, 0.9)' }}>
                <FaSearch onClick={() => {
                    setIsOn(!isOn)
                }} />
            </IconContext.Provider>
        </S.SearchBarContainer>
    )
}
export default SearchBarInput;