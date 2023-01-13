import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from "../components/layout"
import { ThemeProvider } from 'next-themes'
import { createContext, useState } from 'react'

const CountryContext = createContext(null);

export default function App({ Component, pageProps }: AppProps) {
  const [currentCountry, setCurrentCountry] = useState({});

  return (
    <ThemeProvider attribute="class">
      <CountryContext.Provider
        value={{
          currentCountry,
          setCurrentCountry
        }}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CountryContext.Provider>
    </ThemeProvider>
  )
}
