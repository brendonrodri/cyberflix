import styled from "styled-components";
export const SlideContainer = styled.section`
    width: 97%;
    height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
`
export const SlideContent = styled.article`
    width: 98%;
    height: 100%;
    background-color: transparent;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`
export const MovieCard = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background-repeat: no-repeat;
    background-size: 100%;
    
`
export const BoxImage = styled.div`
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
    
`
export const SlideImage = styled.img`
    width: 20vw;
`
export const BoxInfos = styled.div`
    width: 50%;
    height: 80%;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    background-color: rgba(55,43,95, .3);
    

`
export const SlideTitle = styled.h3`
    font-size: 2rem;
    color: rgba(250, 240, 250, 0.9);
    margin-bottom: .7rem;
`
export const SlideOverView = styled.p`
    font-size: 1.1rem;
    text-align: justify;
    color: rgba(250, 240, 250, 0.9);
    margin: .7rem 0;
`
export const SlideListInfos = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center ;
    height: 40%;
    list-style: none;
    color: #ffff00;
`
export const SlideListItem = styled.li`
    font-size: 1.1rem;
    margin: 0.6rem 0;
`
export const SlideButton = styled.div`
    width: 10vw;
    text-align: center;
    background-color:transparent;
`
export const ButtonsBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
`
