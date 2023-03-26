import type { AppProps } from 'next/app'
import {ThemeProvider} from 'next-themes'

import '@/styles/globals.css'
import Script from 'next/script'


export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Script src="https://getlaunchlist.com/js/widget-diy.js" defer/>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
