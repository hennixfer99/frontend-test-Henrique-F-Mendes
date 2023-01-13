import styled, {keyframes} from "styled-components";


const Container = styled.div`
  display: flex;
  align-items: center;
  -webkit-box-shadow: 0px 10px 6px 6px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 2px 10px 6px rgba(0, 0, 0, 0.63);
  background-color: var(--backColor);
  backdrop-filter: blur(5px);
  width: 100%;
  height: 13vh;
  ul{
    list-style: none;
    display: flex;
    width: 100%;
    justify-content: space-around;
  }
  .menu {
    cursor: pointer;
    max-width: 30px;
  }
  button{
    background-color: transparent;
    border: none;
  }
  img{
        margin-left: 7%;
        max-width: 60px;
        max-height: 32px;
        cursor: pointer;
  }
  .buttons-navbar {
    display: flex;
    justify-content: space-between;
    width: 70%;
    margin: 0 auto;
    height: 100%;
    align-items: center;
    list-style: none;
  }
  a {
    text-decoration: none;
  }
  button{
    border-bottom: 0px solid black;
    padding: 5px;
    max-height: 100%;
  }
  figure{
    width: 100%;
  }
`;
export default Container;
