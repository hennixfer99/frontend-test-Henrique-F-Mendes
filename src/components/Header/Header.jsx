import Container from "./Styled";
import menu from "../../imgs/Menu.png";
import Menu from "../Menu/Menu";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

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
          
          <Link href="/sobre">
            <button>pagina1</button>
          </Link>
          
          <Link href="/">
            <button>pagina2</button>
          </Link>

          <Link href="/2">
            <button>pagina3</button>
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

