import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layaut from '../components/Layaut'
import { UseDataContextProvider } from '../context/UseDataContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UseDataContextProvider>
      <Layaut>
        <Component {...pageProps} />
      </Layaut>
    </UseDataContextProvider>
  )
}

export default MyApp
