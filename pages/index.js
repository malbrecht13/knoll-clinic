import Head from 'next/head'
import Header from '../components/Header/header'
import HeroImage from '../components/HeroImage/heroImage';
import PhoneNumber from '../components/PhoneNumber/phoneNumber';

export default function Home() {
  return (
    <div>
      <Head>
        <title>The Knoll Clinic</title>
      </Head>
      <body>
        <Header/>
        <main>
          <HeroImage/>
          <PhoneNumber />
        </main>
      </body>
    </div>
  )
}
