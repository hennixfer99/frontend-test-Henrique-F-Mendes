import me from "../../src/imgs/me.png"
import Image from "next/image"
import Container from "../styled"

export default function AboutUs() {
    return (
    <Container>
        <h1 className="title">About Me</h1>
        <div className="about">
        <Image src={me} alt = "me" className="me"/>
        <div>
        <p>Hello, my name is Henrique Ferreira Mendes and I made this project for a job challenge, I choose a cat API because I love cats and I could do all the tasks, learn a little and explore this API too</p>
        <p>This is my first work with Next.js, is similar to react and I really liked</p> 
        </div>
        </div>
    </Container>
    )
}