import React from "react"
import {FaSearch} from "react-icons/fa"
import { IconContext } from "react-icons"
import * as S from "./style"
const SearchBarInput = () => (
    <S.SearchBarContainer>
        <S.SearchBar />
        <IconContext.Provider value={{size: '1.3rem', color: 'rgba(250, 240, 250, 0.9)'}}>
            <FaSearch />
        </IconContext.Provider>
    </S.SearchBarContainer>
)
export default SearchBarInput;