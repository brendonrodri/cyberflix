import styled from "styled-components"
export const Content = styled.section`
   display: flex;
   width: 95%;
   flex-wrap: wrap;
   margin: 2rem auto;
   justify-content: space-around;
`
export const ItemBox = styled.div`
    width: 22vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 1rem 0;
`
export const ItemTitle = styled.h3`
    color: rgba(250, 240, 250, 0.9);
    text-align: center;
    margin-bottom: 1rem;
`
export const ItemImg = styled.img`
    width: 16vw;
`