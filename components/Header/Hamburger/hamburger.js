import styles from './hamburger.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import {useEffect} from 'react'

const pages = ['Home', 'Services', 'About Us', 'Info']

export default function Hamburger(props) {

    function closeMenu() {
        //use a slight delay to close the menu so that you can follow the links
        //in the menu if you click on them
        setTimeout(() => {
            props.onClick();
        }, 10); 
    }

    useEffect(() => {
        document.addEventListener('mousedown', closeMenu);

        return () => {
            document.removeEventListener('mousedown', closeMenu);
        }
    });

    return (
        <>
        {props.menuIsDisplayed && <nav className={styles.hamburger_nav}>
            <div></div>
            <ul className={styles.hamburger_list} >

                {pages.map(page => <li key={page} 
                tabIndex='0' 
                className={styles.hamburger_items}
                >{page}</li>)}

                <li className={styles.hamburger_items}>
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