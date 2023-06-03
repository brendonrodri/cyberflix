import React from "react"
import { useState } from "react"
import { Context } from "../../Services/Context/context"
import { TbError404 } from "react-icons/tb"
import { FiPlay } from "react-icons/fi"
import { RiPlayListAddLine } from 'react-icons/ri'
import { IconContext } from "react-icons";
import CardMsgError from "../../Components/CardErroComponent"
import * as S from "../style"
export default function FilmsPagesComponent() {
    const [modal, setModal] = useState(false)
    const { apidata } = React.useContext(Context)
    const showInfos = (id) => {
        setModal(id)
    }
    return (
        <S.PageContainer>
            {apidata.map((data) => (
                <S.CardBox
                    width={modal === data.id ? "33vw" : "22vw"}
                    key={data.id}
                    onClick={() => showInfos(data.id)}
                >
                    {modal === data.id
                        ? <S.CardModal>
                            {data.backdrop_path === null ? <CardMsgError /> :
                                <S.CardImg width={modal === data.id
                                    ? '95%'
                                    : '12vw'}
                                    src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`}
                                />
                            }
                            <S.ModalFooter>
                                <S.ModalBoxes display="block" width="75%" >
                                    <S.CardTitle>{data.title}</S.CardTitle>
                                    {/* <h3>{data.first_air_date}</h3> */}
                                </S.ModalBoxes>
                                <S.ModalBoxes display='flex' width="35%">
                                    <S.ModalButtons>
                                        <IconContext.Provider value={{ size: '1.5rem', color: "white" }}>
                                            <FiPlay />
                                        </IconContext.Provider>
                                    </S.ModalButtons>
                                    <S.ModalButtons>
                                        <IconContext.Provider value={{ size: '1.5rem', color: "white" }}>
                                            <RiPlayListAddLine />
                                        </IconContext.Provider>
                                    </S.ModalButtons>
                                </S.ModalBoxes>
                            </S.ModalFooter>
                        </S.CardModal>
                        : <S.CardImg src={`https://image.tmdb.org/t/p/w200/${data.poster_path}`}
                        />
                    }
                </S.CardBox>
            ))}
        </S.PageContainer>
    )
}