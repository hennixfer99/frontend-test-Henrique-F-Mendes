import Container from "./styled"
import Api from "./api"
import axios from "axios"

const Home = ({data}) => (
  
    <Container>
      <main>
        {console.log(data)}
      </main>
    </Container>
 );

  Home.getInitialProps = async () => {
    const response = await axios.get(
        "https://cat-fact.herokuapp.com/facts/random"
    );

    return {data: response.data}
} 


export default Home
