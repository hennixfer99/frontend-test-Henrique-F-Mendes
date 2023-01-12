
import Container from "./Styled";

export default function Menu({open, exit}){
      
return (
  <Container className={open ? 'active' : null}>
  <div className="menu-animation">
  <header> 
  <button className="button-return" onClick={() => exit(false)}>x</button>
  </header>
  <main>
    
       <li>Sobre</li>
  
       <li>Projetos</li>
          
       <li>Qualificações</li>
    
  </main>
  
  </div>
  </Container>
)}
