import styles from './header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import {useState} from 'react';
import Hamburger from './Hamburger/hamburger'
import Carousel from './Carousel/carousel'
import Image from 'next/image';
import Link from 'next/link';

const pages = [
    {name: 'Home', route: '/'},
    {name: 'Services', route: '/services'},
    {name: 'About Us', route: '/about'},
    {name: 'Contact', route: '/contact'},
    {name: 'Forms', route: '/forms'}
];

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
            <Link href="/" >
            <Image
                src="/Images/knoll_logo.jpg"
                alt="Knoll clinic logo"
                width={523}
                height={67}
                tabIndex='0'
                className={styles.knoll_logo}
            />
            </Link> 
            <div>
                <FontAwesomeIcon 
                className={styles.hamburger}
                icon={faBars} 
                tabIndex='0'
                onClick={handleClick}/>
            </div>
            <div className={styles.header_nav}>
                <ul className={styles.header_nav_list}>
                {pages.map(page => (
                    <Link key={page.name} href={page.route}>
                        <li className={styles.header_nav_listitem}>{page.name}</li>
                    </Link>
                ))}
                </ul>
                
            </div>
        </header>
        {displayMenu && <Hamburger onClick={handleClick} menuIsDisplayed={displayMenu} pages={pages}/>}
        {displayCarousel && <Carousel menuIsDisplayed={displayMenu}/>}
        </>
        
        
    )
}