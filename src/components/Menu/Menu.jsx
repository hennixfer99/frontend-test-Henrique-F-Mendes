
import Container from "./Styled";
import Link from "next/link";

export default function Menu({open, exit}){
      
return (
  <Container className={open ? 'active' : null}>
  <div className="menu-animation">
  <header> 
  <button className="button-return" onClick={() => exit(false)}>x</button>
  </header>
  <main>
    

          <Link href="/">
            <li>Facts</li>
          </Link>

          <Link href="/curiosities">
            <li>Curiosities</li>
          </Link>

          <Link href="/about">
            <li>About us</li>
          </Link>
  
    
  </main>
  
  </div>
  </Container>
)}
