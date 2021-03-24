import styles from './header.module.scss';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import {useState} from 'react';

import Hamburger from './Hamburger/hamburger'
import Carousel from './Carousel/carousel'

export default function Header() {
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
                src="/knoll_logo.jpg"
                width={200}
                height={24}
                tabindex='0'
            />
            <div>
                <FontAwesomeIcon 
                className={styles.hamburger} 
                icon={faBars} 
                tabIndex='0'
                onClick={handleClick}/>
            </div>
        </header>
        {displayMenu && <Hamburger onClick={handleClick} />}
        <Carousel menuIsDisplayed={displayMenu}/>
        </>
        
        
    )
}