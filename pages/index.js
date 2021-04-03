import Head from 'next/head'
import Header from '../components/Header/header'
import Main from '../components/Main/main'
import Mainlayout from '../components/Mainlayout/mainlayout'
import Footer from '../components/Footer/footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>The Knoll Clinic</title>
      </Head>
  
      <Header displayCarousel={true}/>
      <Mainlayout>
        <Main/>
      </Mainlayout>
      <Footer />
    </>
  )
}
