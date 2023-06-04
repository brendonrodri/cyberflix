import styled from "styled-components"
export const PageContainer = styled.section`
   display: flex;
   width: 95%;
   flex-wrap: wrap;
   margin: 2rem auto;
   justify-content: space-between;
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
    width: ${props => props.width} ;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    margin: 1rem 0;
    background-color: rgba(25, 23, 65, 0.9);
    box-shadow: rgba(0, 0, 0, 0.6) 0px 2px 8px 3px;
    border-radius: 4px;
    cursor: pointer;
`
export const CardTitle = styled.h3`
    color: rgba(250, 240, 250, 0.9);
    font-size: 1rem;
`
export const CardImg = styled.img`
    width: ${props => props.width};
`

export const CardModal = styled.div`
    z-index: 3;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const ModalBoxes = styled.div`
    background: rgba(255, 255, 255, 0.4);

    width: ${props => props.width};
    height: ${props => props.height};
    display: ${props => props.display};
    justify-content: space-evenly;
    align-items: center;
    padding: .8rem;
`
export const ModalButtons = styled.button`
    width: 3vw;
    background-color: #7e4aaf;
    border: none;
    padding: 3px;
    border-radius: 3px;
    
`
export const ModalFooter = styled.footer`
    display: flex;
    width: 95%;
`

