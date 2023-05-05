import styled from "styled-components"
export const PageContainer = styled.section`
   display: flex;
   width: 95%;
   flex-wrap: wrap;
   margin: 2rem auto;
   justify-content: space-around;
   animation: slide-in-elliptic-left-fwd 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    @keyframes slide-in-elliptic-left-fwd {
    0% {
        transform: translateX(-800px)  scale(0);
        transform-origin: -100% 50%;
        opacity: 0;
    }
    100% {
        transform: translateX(0) rotateY(0) scale(1);
        transform-origin: 1800px 50%;
        opacity: 1;
    }
    }
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