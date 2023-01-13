import {DarkGlobalStyle, GlobalStyle} from "../styles/global"
import Header from "../src/components/Header/Header"
import { createContext, useState } from "react"


function MyApp({ Component, pageProps }) {
  
  const [theme, setTheme] = useState('dark')

  return (
  <>
  {theme === 'light'? (
  <>
  <DarkGlobalStyle/>
  </>
  ):(
  <>
  <GlobalStyle/>
  </>)}
  <GlobalStyle/>
  <Header />
  <div className="dark-mode">
  <input
          className="checkbox"
          type="checkbox"
          checked={theme === 'dark'}
          onChange={(e) => {
            setTheme(e.target.checked ? 'dark' : 'light')
          }}
  />
          <p>Dark mode</p>

  </div>
  <Component {...pageProps} />
  </>
  )
}



export default MyApp
