import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { Analytics } from '@vercel/analytics/react';

import '@/styles/globals.css';
import Script from 'next/script';
import { ClerkProvider } from '@clerk/nextjs';
import Header from '@/components/Header/Header';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ClerkProvider>
      <ThemeProvider>
        <Script src="https://getlaunchlist.com/js/widget-diy.js" defer />
        <>
          <Header />
          <Component {...pageProps} />
        </>
        <Analytics />
      </ThemeProvider>
    </ClerkProvider>
  );
}
