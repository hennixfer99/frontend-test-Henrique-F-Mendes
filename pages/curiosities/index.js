import Container from "../styled"
import { useEffect, useState } from "react"

const URL_API = "https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1"

export default function Home () {
  
  const [loading, setLoading] = useState(true)

  const [text, setText] = useState('')

  const [data, setData] =  useState(null)


  async function refreshFact(){
    const response = await fetch(URL_API, {
        method: 'GET'
      })
    const data = await response.json()

    if(!data)
    throw 'Requisition problems'

    setText(data.text)

  }
  

  const fetchAllData = async() =>{
    try{
        setLoading(true)
  
        const response = await fetch(URL_API, {
          method: 'GET'
        })
  
        const data = await response.json()
  
  
        if(!data)
         throw 'Requisition problems'
  
        setData(data)
        setText(data.text)

      }catch(error){
        console.log(error)
      }
  }

  useEffect(() => {
    fetchAllData()  
  },[])
  
  return (
    <Container>
      <main>

      <h1>Random Curiosities</h1>
      <p>This page is to get some random curiosities, have more than 500 for explore, good luck</p>

        {loading && !data &&
        <div className="loading">
        <h2>Loading Informations</h2>
        <p>If the page not open, try to refresh the page</p>
        </div>
        }

        
         <>
         <ul>
          <li>
            <h2>Everytime a new curiosity</h2>
            <p>
              {text}
            </p>
            <button onClick={refreshFact}>Refresh Curiosity</button>
            <p>Some time the API will show something in another language or some error, really sorry !</p>
          </li>
        </ul>
          </>

      </main>
    </Container>
 )
 ;}
