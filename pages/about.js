import Head from 'next/head'
import Header from '../components/Header/header'
import TextSection from '../components/TextSection/textSection'
import Footer from '../components/Footer/footer'
import {useState, useEffect} from 'react';

export default function About() {
    const [text, setText] = useState('');

useEffect(() => {
    const getText = async () => {
        const response = await fetch('/Text/about.json');
        const data = await response.json();
        setText(data.about);
     }
     getText();
},[]);

const { title, body } = text;
 
  return (
    <>
      <Head>
        <title>Knoll Clinic -- About</title>
      </Head>
      <body>
        <Header />
        <TextSection title={title} body={body}/>
        <Footer />
      </body>
    </>
  )
}