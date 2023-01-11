import Container from "./Styled";
import menu from "../../imgs/Menu.png";
import Menu from "../Menu/Menu";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Link } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 600;

  function menuAtivo() {
    if (menuOpen === true) {
      setMenuOpen(false);
    } else {
      setMenuOpen(true);
    }
  }

  React.useEffect(() => {
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
          <Link to="/">
            <li>Sobre</li>
          </Link>
          <Link to="/projetos">
            <li>Projetos</li>
          </Link>
          <Link to="/qualificacoes">
            <li>Qualificações</li>
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

