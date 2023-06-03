import { TbError404 } from "react-icons/tb"
import { IconContext } from "react-icons";
import * as S from "./style"
const CardMsgError = () => {
    return (
        <S.MsgErrorDiv>
            <IconContext.Provider value={{ size: '4rem', color: 'white' }}>
                <TbError404 />
            </IconContext.Provider>
            <S.Msg>
                Sinto muito, imagem indisponível
            </S.Msg>
        </S.MsgErrorDiv>
    )
}

export default CardMsgError;