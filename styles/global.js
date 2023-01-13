import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`

* {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0; 
    }
    :root {
        --black: #495057;
        --backColor: #DEE2E6;
        --sucess: #98B13A;
        --negative: #E83F5B;
    }
    body {
        background: var(--backColor);
        color: var(--black);
    }
    body, input, button {
        font-family: 'inter';
        font-size: 1rem;
    }
    h1, h2, h3, h4 {
        font-family: 'nunito';
        font-weight: 700;
    }
    button{
        cursor: pointer;
        color: var(--black);
    }
    a {
        text-decoration: none;
    }
    .darkMode{
        display: flex;
        flex-direction: row-reverse;
        justify-content: end;
        margin: 10px 20px 10px 0px;
    }
    .darkMode p {
        margin-left: 5px;
    }
    .checkbox{
        z-index: 1;
        padding: 0 0 0 0;
        appearance: none;
        width: 18px;
        height: 18px;
        border:1px solid grey;
        border-radius: 100%;
        color: grey;
        margin:auto 10px;
        cursor: pointer;
        position: relative;
     }
    .checkbox:hover{
        z-index: 1;
        border: 1px solid rgb(87,221,255); 
    }
   
`

const DarkGlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0; 
    }
    :root {
        --backColor: #495057;
        --black: #DEE2E6;
        
    }
    body {
        background: var(--backColor);
        color: var(--black);
    }
    body, input, button {
        font-family: 'inter';
        font-size: 1rem;
    }
    h1, h2, h3, h4 {
        font-family: 'nunito';
        font-weight: 700;
    }
    button{
        cursor: pointer;
    }
    a {
        text-decoration: none;
    }
    .darkMode{
        display: flex;
        flex-direction: row-reverse;
        justify-content: end;
        margin: 10px 20px 10px 0px;
    }
    .darkMode p {
        margin-left: 5px;
    }
    .checkbox{
        z-index: 1;
        padding: 0 0 0 0;
        appearance: none;
        width: 18px;
        height: 18px;
        border:1px solid grey;
        border-radius: 100%;
        color: grey;
        margin:auto 10px;
        cursor: pointer;
        position: relative;
     }
    .checkbox:hover{
        z-index: 1;
        border: 1px solid rgb(87,221,255); 
    }
   
`

export {GlobalStyle,  DarkGlobalStyle}