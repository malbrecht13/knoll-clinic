import styles from './carousel.module.scss';
import {useEffect, useState} from 'react';

const slides = ['Your health is our priority!', 'Free immunizations!',
'Now offering Botox injections for migraines!', 'We accept most major insurances!',
'Free blood pressure checks for all patients!', 'Comprehensive health care for all ages!',
'Serving Hays since 2009!']

export default function Carousel({menuIsDisplayed}) {
    const [current, setCurrent] = useState(0)

    useEffect(() => {
        const next = (current + 1) % slides.length;
        const id = setTimeout(() => setCurrent(next), 7000);
        return () => clearTimeout(id);
    }, [current]);

    let styleClass = styles.carousel_text_center;
    if(menuIsDisplayed) {
        styleClass = styles.carousel_text_left;
    } 

    return <h2 className={styleClass}>{slides[current]}</h2>
}