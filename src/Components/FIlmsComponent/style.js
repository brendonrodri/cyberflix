import styled from "styled-components"
export const FilmsContainer = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`
export const FilmsContainterTitle= styled.h2`
    font-size: 1rem;

`
export const FilmsBox = styled.div`
    width: 21vw;
    height: 65vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 1rem;
    align-items: center;
`
export const FilmImg = styled.img`
    width: 90%;
`
export const FilmName = styled.h3`
font-size: 1.1rem;
color: rgba(230, 210, 230, 0.9)
`
export const FilmInfos = styled.div`
    display: flex;
    height: 12vh;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`
export const FilmDate = styled.p`
    font-size: 1rem;
    color: rgba(230, 210, 230, 0.9)
`