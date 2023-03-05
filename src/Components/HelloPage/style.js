import styled from "styled-components";
export const HelloMain = styled.main`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgb(20,23,35);
`
export const HelloMainSection = styled.section`
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export  const Title = styled.h2`
    font-size: 5rem;
    color: rgba(250, 240, 250);
`
export const HelloPageButton = styled.button`
    width: 13vw;
    height: 7vh;
    font-size: 1rem;
    border-radius: 0.3rem;
    border: none;
    background-color:rgba(25,23,65, .9);
    color: rgba(250, 240, 250);
    transition: 600ms;
    :hover{
        color: rgb(25,23,65);
        background-color: rgba(250, 240, 250);
        font-weight: bold;
        transform: scale(1.1);
    }
`