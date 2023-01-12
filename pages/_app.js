import GlobalStyle from "../styles/global"
import Header from "../src/components/Header/Header"


function MyApp({ Component, pageProps }) {
  return (
  <>
  <GlobalStyle />
  <Header></Header>
  <Component {...pageProps} />
  </>
  )
}

export default MyApp
