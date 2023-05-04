import styled from "styled-components"
export const PageContainer = styled.section`
   display: flex;
   width: 95%;
   flex-wrap: wrap;
   margin: 2rem auto;
   justify-content: space-around;
`
export const CardBox = styled.div`
    width: 22vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    margin: 1rem 0;
    padding-top: 1rem;
    background-color: rgba(25, 23, 65, 0.9);
    box-shadow: rgba(225, 232, 8, 0.86) 0px 1px 6px 2px;
    
`
export const CardTitle = styled.h3`
    color: rgba(250, 240, 250, 0.9);
    text-align: center;
   
`
export const CardImg = styled.img`
    width: 16vw;
`