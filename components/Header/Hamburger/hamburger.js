import styles from './hamburger.module.scss'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import {useEffect} from 'react'



export default function Hamburger({pages, ...props}) {

    function closeMenu() {
        //use a slight delay to close the menu so that you can follow the links
        //in the menu if you click on them
        setTimeout(() => {
            props.onClick();
        }, 200); 
    }

    useEffect(() => {
        document.addEventListener('mouseup', closeMenu);

        return () => {
            document.removeEventListener('mouseup', closeMenu);
        }
    });

    return (
        <>
        {props.menuIsDisplayed && <nav className={styles.hamburger_nav}>
            <div></div>
            <ul className={styles.hamburger_list} >

                {pages.map(page => 
                <Link href={page.route} key={page.name} passHref><a><li  
                tabIndex='0' 
                className={styles.hamburger_items}
                >{page.name}</li></a>
                </Link>)}

                <li className={styles.hamburger_items} key="call">
                    <a href="tel:785-625-5500">
                        Call &nbsp;
                        <FontAwesomeIcon
                            icon={faPhone}
                            tabIndex='0'
                            onBlur={closeMenu}
                        />
                    </a>
                </li>  
            </ul>
        </nav>}
        </>
    )
}