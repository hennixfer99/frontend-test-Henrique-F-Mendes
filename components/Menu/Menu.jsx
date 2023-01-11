import { Link } from "react-router-dom";
import Container from "./Styled";

export default function Menu({open, exit, link1, link2}){
      
return (
  <Container className={abrir ? 'active' : null}>
  <div className="menu-animation">
  <header> 
  <button className="buttonreturn" onClick={() => sair(false)}>x</button>
  </header>
  <main>
      <Link to = "/">
       <li>Sobre</li>
      </Link>
      <Link to = "/projetos">
       <li>Projetos</li>
      </Link>
      <Link to = "/qualificacoes">
       <li>Qualificações</li>
      </Link>
  </main>
  
  </div>
  </Container>
)}
