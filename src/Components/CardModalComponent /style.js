import styled from "styled-components"
export const  ModalContainer= styled.section`
    width: 80%;
    height: 80vh;
    margin: 3% auto;
    background-color: #312759;
    transition: 2000ms;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`
export const FilmBox = styled.section`
    display: flex;
    justify-content: space-around;
`

export const FilmModalTitle = styled.h2`
    font-size: 2.4rem;
    color: #fefefe;
    padding: 0.5rem;
`

export const FilmDesc = styled.p`
    font-size: 1.2rem;
    color: #fefefe;
    padding: 0.5rem;`


export const ModalImg = styled.img`
    width: 30%;
`

export const FilmInfos = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
`

export const FilmList = styled.ul`
    font-size: 1rem;
    color: #fefefe;
    list-style: none;
    li{
        padding: 0.2rem 0.5rem;
    }
`
export const CloseButton = styled.button`
    background-color: transparent;
    border: none;
    width: 3vw;
    height: 4vh;
    font-weight: bold;
    font-size: 1.5rem;
    color: #fefefe;
    
`