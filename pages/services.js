import Head from 'next/head'
import Header from '../components/Header/header'
import Main from '../components/Main/main'
import Mainlayout from'../components/Mainlayout/mainlayout';
import Footer from '../components/Footer/footer'

export default function Services() {

  
  return (
    <>
      <Head>
        <title>Knoll Clinic -- Services</title>
      </Head>

      <Header />
      <Mainlayout>
        <Main/>
      </Mainlayout>
      <Footer />
    </>
  )
}