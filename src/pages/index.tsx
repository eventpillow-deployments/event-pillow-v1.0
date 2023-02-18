import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Header from '@/components/Header/Header'
import Main from '@/components/Main/Main'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>EventPillow</title>
        <meta name="description" content="Connect with production houses, get hired as an artist and manage your events all from one place." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Main />
    </>
  )
}
