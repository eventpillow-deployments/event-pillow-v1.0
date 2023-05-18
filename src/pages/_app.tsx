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
const authRoutes = ['/signin', '/signup']
export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { pathname, asPath } = router;
  const isProtectedRoute = protectedRoutes.includes(pathname);
  const isAuthRoute = authRoutes.includes(asPath);

  return (
    <ClerkProvider>
      <ThemeProvider>
        <Script src="https://getlaunchlist.com/js/widget-diy.js" defer />
        <>
          {!isAuthRoute && <Header />}
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
