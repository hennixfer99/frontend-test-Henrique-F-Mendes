import Container from "./Styled";
import menu from "../../imgs/Menu.png";
import Menu from "../Menu/Menu";
import React, { useState, useEffect, createContext, useContext } from "react";
import Image from "next/image";
import Link from "next/link";

const PageContext = createContext({name: "teste"})

const Page = () => {
  const pageName = useContext(PageContext)
 
  return <button>{pageName.name}</button>
     
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [width, setWidth] = useState(601);
  const breakpoint = 600;

  function menuAtivo() {
    if (menuOpen === true) {
      setMenuOpen(false);
    } else {
      setMenuOpen(true);
    }
  }

  useEffect(() => {
    const windowSize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", windowSize);
    return () => {
      window.removeEventListener("resize", windowSize);
    };
  }, []);

  return (
    <Container>
      {width > breakpoint ? (
        <ul className="buttons-homepage">
          

          <Link href="/">
            <PageContext.Provider value = {{name : "Facts"}}>
            <Page/>
            </PageContext.Provider>            
          </Link>

          <Link href="/curiosities">
          <PageContext.Provider value = {{name : "Curiosities"}}>
            <Page/>
            </PageContext.Provider>  
          </Link>

          <Link href="/about">
          <PageContext.Provider value = {{name : "About us"}}>
            <Page/>
            </PageContext.Provider>  
          </Link>
          
        </ul>
      ) : (
        <figure>
          <Image className="menu" alt="logo" src={menu} onClick={menuAtivo} />
        </figure>
      )}

       

      <Menu open={menuOpen} exit={setMenuOpen}/>
    </Container>
  );
}

