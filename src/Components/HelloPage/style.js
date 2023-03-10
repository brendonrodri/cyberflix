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
    font-family: 'Tilt Neon', cursive;
    transition: 500ms;
    :hover{
        transform: scale(1.1);
        text-decoration: underline;
        text-shadow: 4px 2px 1px rgba(55,43,95, 1);
    }
`
export const HelloPageButton = styled.button`
    width: 13vw;
    height: 7vh;
    font-size: 1rem;
    font-weight: bold;
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
        a{
            color: rgb(25,23,65);
        }
    }
    a{
        transition: 600ms;
        text-decoration: none;
        color: rgba(250, 240, 250);
    }

`