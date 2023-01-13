import Container from "./styled"
import { useEffect, useState } from "react"

const URL_API = "https://cat-fact.herokuapp.com/facts"

export default function Home () {
  
  const [loading, setLoading] = useState(true)
  const [data, setData] =  useState(null)

  const fetchAllData = async() =>{
    try{
      setLoading(true)

      const response = await fetch(URL_API, {
        method: 'GET'
      })

      const data = await response.json()

      console.log(data)

      if(!data)
       throw 'Requisition problems'


      setData(data)

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

      <h1>Cat Facts</h1>
      <p>I made this page to show some facts about cats that some people never heard about it</p>

        {loading && !data &&
        <div className="loading">
        <h2>Loading Informations</h2>
        <p>If the page not open, try to refresh the page</p>
        </div>
        }

        {data && data.map((item) => (
         <>
         <ul>
          <li>
            <p>
              {item.text}
            </p>
          </li>
        </ul>
         
          
          </>
        ))}

      </main>
    </Container>
 )
 ;}