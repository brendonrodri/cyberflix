import { useContext } from "react"
import { Link } from "react-router-dom"
import { Context } from "../../Services/Context/context"
import * as S from "./style"
export default function NavBarComponent() {
    const {setInput} = useContext(Context)
    const clearInput = () => setInput('')
    return (
        <>
            <S.NavBar>
                <S.NavList>
                    <S.NavListItem onClick={()=> clearInput()}><Link to="/">Início</Link></S.NavListItem>
                    <S.NavListItem onClick={()=> clearInput()}><Link to="/Populares"> Populares </Link> </S.NavListItem>
                    <S.NavListItem onClick={()=> clearInput()}><Link to="/Series">Séries</Link></S.NavListItem>
                    <S.NavListItem onClick={()=> clearInput()}>Gêneros </S.NavListItem>
                </S.NavList>
            </S.NavBar>
        </>

    )
}