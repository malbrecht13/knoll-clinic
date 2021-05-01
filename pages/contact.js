import Head from 'next/head'
import Header from '../components/Header/header.js'
import Mainlayout from '../components/Mainlayout/mainlayout.js'
import Footer from '../components/Footer/footer.js'
import Listwithheader from '../components/Listwithheader/listwithheader.js'
import Infoheader from '../components/InfoHeader/infoheader.js';
import Contactform from '../components/ContactForm/contactform.js';



const list = [
  { title: 'Hours', 
    id: 1,
    body: ['Monday through Thursday', '8:00-12:00 and 1:00-5:00', 'Friday', '8:00-12:00']},
  { title: 'Contact Us',
    id: 2,
    body: ['Address: 1100 East 22nd Street\nHays, KS 67601', 'Phone: 785-625-5500', 'Fax: 785-625-5501', 'Email: tknoll@knollclinic.com']}
];

export default function Info() {

  
  return (
    <>
      <Head>
        <title>Knoll Clinic | Contact</title>
      </Head>
        <Header />
        <Mainlayout>
          <Infoheader/>
          {list.map(listItem =>
              <Listwithheader  key={listItem.id} title={listItem.title} 
              body={listItem.body}/>
          )}
          <Contactform/>
        </Mainlayout>
        <Footer />
  
    </>
  )
}