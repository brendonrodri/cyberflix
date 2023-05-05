import styled from "styled-components"
export const  ModalContainer= styled.section`
    width: 95%;
    margin: 0 auto;
    background-color: rgba(250, 250, 250, .1);
    transition: 2000ms;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
    animation: scale-in-bottom 500ms ease-in-out both;
@keyframes scale-in-bottom {
  0% {
    transform: scale(0);
    transform-origin: 50% 100%;
    opacity: 1;
  }
  100% {
    transform: scale(1);
    transform-origin: 50% 100%;
   
  }
}
`
export const FilmBox = styled.section`
    display: flex;
    justify-content: space-evenly;
`

export const FilmModalTitle = styled.h2`
    font-size: 2.4rem;
    color: #fefefe;
    padding: 0.5rem;
`
export const FilmDesc = styled.p`
    font-size: 1.2rem;
    color: #fefefe;
    padding: 0.5rem;
`
export const ModalImg = styled.img`
    width: 25%;
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
    width: 5vw;
    font-weight: bold;
    font-size: 1.5rem;
    color: #fefefe;
    position: relative;
    top: 0px;
    left: 10px;;
`
export const ButtonContainer = styled.div`
    width: 100%;
`
export const ModalButton = styled.button`
    width: 10vw;
    height: 7vh;
    margin: 1rem 0.5rem;
    color: #000;
    font-size: 1rem;
    font-weight: bold;
    border-radius: 1px;
    border: none;
    background-color: #fefefe;
`

