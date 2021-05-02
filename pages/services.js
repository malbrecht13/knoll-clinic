import Head from 'next/head'
import Header from '../components/Header/header'
import Mainlayout from '../components/Mainlayout/mainlayout';
import Servicedropdown from '../components/Servicedropdown/servicedropdown.js'
import Footer from '../components/Footer/footer'


const Services = () => {

  
  return (
    <>
      <Head>
        <title>Knoll Clinic | Services</title>
      </Head>

      <Header />
      <Mainlayout>
        <Servicedropdown/>
      </Mainlayout>
      <Footer />
    </>
  )
}

export default Services;