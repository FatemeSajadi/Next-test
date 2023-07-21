import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import { AppProps } from 'next/app';
import { ThemeProvider } from "next-themes";
import { appWithTranslation } from 'next-i18next'
import nextI18NextConfig from '../next-i18next.config.js'

const App = ({ Component, pageProps }: AppProps) => {
  return(
    <ThemeProvider enableSystem={true} attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default appWithTranslation(App,nextI18NextConfig)