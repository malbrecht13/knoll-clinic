import Head from 'next/head'
import Header from '../components/Header/header'
import Main from '../components/Main/main'

export default function Home() {

  
  return (
    <>
      <Head>
        <title>The Knoll Clinic</title>
      </Head>
      <body>
        <Header />
        <Main/>
      </body>
    </>
  )
}
