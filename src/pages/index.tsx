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
        <meta property="og:title" content="EventPillow"/>
        <meta property="og:site_name" content="EventPillow"/>
        <meta property="og:description" content="Connect with production houses, get hired as an artist and manage your events all from one place." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.eventpillow.com" />
        <meta name="image" property="og:image" content="https://ik.imagekit.io/cqught041/EP-Main-Website/SEO/OG_IMAGE.png?updatedAt=1681490051114" />
      </Head>
      <Header />
      <Main />
      <Features />
      <WaitlistForm />
      <Footer />
    </>
  )
}
