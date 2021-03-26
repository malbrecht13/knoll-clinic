import Head from 'next/head'
import Header from '../components/Header/header'
import Main from '../components/Main/main'
import Footer from '../components/Footer/footer'

export default function Services() {

  
  return (
    <>
      <Head>
        <title>Knoll Clinic -- Services</title>
      </Head>
      <body>
        <Header />
        <Main/>
        <Footer />
      </body>
    </>
  )
}