import Head from 'next/head'
import Header from '../components/Header/header'
import Main from '../components/Main/main'
import Footer from '../components/Footer/footer'

export default function Home() {

  
  return (
    <>
      <Head>
        <title>The Knoll Clinic</title>
      </Head>
      <body>
        <Header displayCarousel={true}/>
        <Main/>
        <Footer />
      </body>
    </>
  )
}
