import Head from 'next/head'
import Header from '../components/Header/header'
import Mainlayout from '../components/Mainlayout/mainlayout'
import Footer from '../components/Footer/footer'
import HistoryFormContainer from '../components/HistoryFormContainer/historyformcontainer';

const historyForms = [
    {
        id: 1, 
        thumbnail: '/Forms/thumbnails/history_form_thumbnail.png',
        file: '/Forms/Medical_History_Form_REVISED_Adult_7-2020.pdf',
        name: 'Adult Medical History Form',
    },
    {
        id: 2, 
        thumbnail: '/Forms/thumbnails/pediatric_history_form_thumbnail.png',
        file: '/Forms/Medical_History_Form_REVISED_Peds_7-2020.pdf',
        name: 'Pediatric History Form (Newborn to 16)'
    }
];

export default function Forms() {
  return (
    <>
      <Head>
        <title>The Knoll Clinic | Forms</title>
      </Head>
  
      <Header/>
      <Mainlayout>
        <HistoryFormContainer forms={historyForms}/>
      </Mainlayout>
      <Footer />
    </>
  )
}