import styled from "styled-components";


const Container = styled.div`
    position: absolute;
    max-width: 350px;
    height:0;
    overflow: hidden;
    width: 100%;
    background-color: transparent;
    bottom: 0;
    top: 0;
    left: 0;
    z-index: 2;
    transition: height 1s;
    
    menu::-webkit-scrollbar {
        width: 0px;
    }
    .menu-animation{
        max-height:100%;
    }
    header{
        background-color: var(--backColor);
        height:13vh;
        display:flex;
        align-items: center;
        justify-content:start;
        padding-left:15px;
    }
    .button-return{
        text-align: center;
        padding: 0 20px 32px 20px;
        background-color:var(--backColor);
        border-radius: 8px;   
        font-size: 25px;
        height: 20px;
        color: var(--black);
        border: none;
        cursor: pointer;
    }
    main{
        border: 1.5px solid #ADB5BD;
        background-color: var(--backColor);
        color: var(--black);
        backdrop-filter: blur(5px);
        z-index: 2;
        border-radius: 0 0 8px 8px;
        opacity: 0;    
    }
    img{
        max-width: 60px;
        max-height: 32px;
        margin-bottom: 20px;
    }
    button{
        background-color: transparent;
        border: none;
        margin-left: 15px;
    }
    a{
        text-decoration: none;
        width: 100%;
    }
    li{
        height: 40px;
        margin-top: 40px;
        margin-left: 35px;
        cursor:pointer;
        text-align: start;
        list-style: none; 
        opacity: 0;
        font-weight: 600;   
        color: var(--black)
    }

    p{
        font-weight: 600;
        height: 40px;
        margin-top: 20px;
        padding-top: 20px;
        padding-left: 35px;
        border-top: 1.5px solid #adb5bd;
        cursor:pointer;
        text-align: start;
        opacity: 0;      
    }
    
    &.active{
        height: 600px;
        
    }
    &.active main{
        opacity: 1;
        transition: opacity, 1s;
    }
    &.active li{
        opacity: 1;
        transition: opacity, 0.5s;
    }
    &.active p{
        opacity: 1;
        transition: opacity, 0.5s;
    }
`

export default Container