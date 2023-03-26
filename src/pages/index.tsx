import Head from 'next/head'
import Header from '@/components/Header/Header'
import Main from '@/components/Main/Main'
import Footer from '@/components/Footer/Footer'
import Features from '@/components/Features/Features'
import WaitlistForm from '@/components/WaitlistForm/WaitlistForm'

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
      <Features />
      <WaitlistForm />
      <Footer />
    </>
  )
}
