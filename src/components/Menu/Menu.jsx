
import Container from "./Styled";

export default function Menu({open, exit}){
      
return (
  <Container className={open ? 'active' : null}>
  <div className="menu-animation">
  <header> 
  <button className="button-return" onClick={() => exit(false)}>x</button>
  </header>
  <main>
    
       <li>page1</li>
  
       <li>page2</li>
          
       <li>page3</li>
    
  </main>
  
  </div>
  </Container>
)}
