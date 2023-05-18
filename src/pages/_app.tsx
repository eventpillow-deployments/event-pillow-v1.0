import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { Analytics } from '@vercel/analytics/react';

import '@/styles/globals.css';
import Script from 'next/script';
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
} from '@clerk/nextjs';
import Header from '@/components/Header/Header';
import { useRouter } from 'next/router';

const protectedRoutes = ['/settings', '/builder'];
export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { pathname } = router;
  const isProtectedRoute = protectedRoutes.includes(pathname);

  return (
    <ClerkProvider>
      <ThemeProvider>
        <Script src="https://getlaunchlist.com/js/widget-diy.js" defer />
        <>
          <Header />
          {isProtectedRoute ? (
            <>
              <SignedIn>
                <Component {...pageProps} />
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          ) : (
            <>
              <Component {...pageProps} />
            </>
          )}
        </>
        <Analytics />
      </ThemeProvider>
    </ClerkProvider>
  );
}
