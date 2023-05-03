import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    html{
        font-family: 'Roboto', sans-serif;
        scrollbar-width: 1px;
    }
    body{
        background-color: rgb(20,23,35);
    }
    /* body::-webkit-scrollbar {
        width: 12px;
    }
    body::-webkit-scrollbar-track {
        background-color: rgb(20,23,35);
    }
    body::-webkit-scrollbar-thumb {
        background-color: rgba(55,43,95, .9);  
        border-radius: 25px; 
        border: 3px solid rgb(20,23,35);; 
    } */
`
export default GlobalStyle;