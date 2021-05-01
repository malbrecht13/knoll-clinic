import styles from './header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import {useState} from 'react';

import Hamburger from './Hamburger/hamburger'
import Carousel from './Carousel/carousel'
import Image from 'next/image';

export default function Header({displayCarousel}) {
    const [displayMenu, setDisplayMenu] = useState(false);

    function handleClick() {
        if(displayMenu) {
            setDisplayMenu(false)
        } else {
            setDisplayMenu(true)
        }
    }


    return (
        <>
        <header className={styles.header_section}>
            <Image
                src="/Images/knoll_logo.jpg"
                width={523}
                height={67}
                tabIndex='0'

            />
            <div>
                <FontAwesomeIcon 
                className={styles.hamburger} 
                icon={faBars} 
                tabIndex='0'
                onClick={handleClick}/>
            </div>
        </header>
        {displayMenu && <Hamburger onClick={handleClick} menuIsDisplayed={displayMenu}/>}
        {displayCarousel && <Carousel menuIsDisplayed={displayMenu}/>}
        </>
        
        
    )
}