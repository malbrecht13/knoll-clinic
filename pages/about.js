import Head from 'next/head'
import Header from '../components/Header/header'
import Main from '../components/Main/main'
import Footer from '../components/Footer/footer'

export default function About() {

  
  return (
    <>
      <Head>
        <title>Knoll Clinic -- About</title>
      </Head>
      <body>
        <Header />
        <Main/>
        <Footer />
      </body>
    </>
  )
}