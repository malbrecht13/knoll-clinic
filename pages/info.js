import Head from 'next/head'
import Header from '../components/Header/header'
import Main from '../components/Main/main'
import Footer from '../components/Footer/footer'

export default function Info() {

  
  return (
    <>
      <Head>
        <title>Knoll Clinic -- Info</title>
      </Head>
      <body>
        <Header />
        <Main/>
        <Footer />
      </body>
    </>
  )
}