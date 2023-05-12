import styled from "styled-components"
export const FilterContainer = styled.section`
   display: flex;
   width: 95%;
   flex-wrap: wrap;
   margin: 2rem auto;
   justify-content: flex-start;
   background-color: rgba(25, 23, 65, 0.9);
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
export const FilterContainerTitle = styled.h2`
    margin: 2rem;
    font-size: 2rem;
    color: #f2f2f2f2;
`

export const CardBox = styled.div`
    width: 22vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    margin: 1rem 0;
    padding-top: 1rem;
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
export const CardTitle = styled.h3`
    font-size: 1.2rem;
    color: rgba(250, 240, 250, 0.9);
    text-align: center; 
`
export const CardImg = styled.img`
    width: 16vw;
`