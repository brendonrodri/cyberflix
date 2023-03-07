import styled from "styled-components";
export const SlideContainer = styled.section`
    width: 90%;
    height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: red;
`
export const SlideContent = styled.article`
    width: 90%;
    height: 90%;
    background-color: blue;
    display: flex;
    align-items: center;
    background-repeat: no-repeat;
    background-size: cover;
    div{
        display: flex;
        flex-direction: column;
        height: 100%;
        align-items: center;
        justify-content: center ;
    }
`
export const BoxImage = styled.div`
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
    
`
export const SlideImage = styled.img`
    width: 15vw;
`
export const BoxInfos = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    

`
export const SlideTitle = styled.h3`
    font-size: 2rem;
    color: rgba(250, 240, 250, 0.9);
`
export const SlideListInfos = styled.ul`
    list-style: none;
    color: rgba(250, 240, 250, 0.9);
`
export const SlideListItem = styled.li`
    font-size: 1.1rem;
`

export const ButtonsBox = styled.div``
