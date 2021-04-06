import Head from 'next/head'
import Header from '../components/Header/header'
import Mainlayout from '../components/Mainlayout/mainlayout'
import Footer from '../components/Footer/footer'
import Listwithheader from '../components/Listwithheader/listwithheader'

const list = [
  { title: 'Hours', 
    body: ['Monday through Thursday', '8:00-12:00 and 1:00-5:00', 'Friday', '8:00-12:00']},
  { title: 'Contact Us',
    body: ['Address: 1100 East 22nd Street\nHays, KS 67601', 'Phone: 785-625-5500', 'Fax: 785-625-5501', 'Email: tknoll@knollclinic.com']}
];

export default function Info() {

  
  return (
    <>
      <Head>
        <title>Knoll Clinic -- Info</title>
      </Head>
      <body>
        <Header />
        <Mainlayout>
          {list.map(listItem =>
              <Listwithheader title={listItem.title} 
              body={listItem.body}/>
          )}
        </Mainlayout>
        <Footer />
      </body>
    </>
  )
}