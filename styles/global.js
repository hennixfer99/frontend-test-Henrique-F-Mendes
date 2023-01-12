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
        background: var(--white);
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
`
export default GlobalStyle