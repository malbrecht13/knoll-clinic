import styles from './hamburger.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import {useRef, useState, useEffect} from 'react'

const pages = ['Home', 'Services', 'About Us', 'Info']

export default function Hamburger(props) {
    const [menuDisplayed, setMenuDisplay] = useState(props.menuIsDisplayed);

    const node = useRef();

    function closeMenu(e) {
        if(node.current.contains(e.target)) {
            return;
        }
        setMenuDisplay(false);
        props.onClick();
    }

    function menuClicked() {
        props.onClick();
    }

    useEffect(() => {
        document.addEventListener('mousedown', closeMenu);

        return () => {
            document.removeEventListener('mousedown', closeMenu);
        }
    }, [menuDisplayed]);

    

    return (
        <>
        {menuDisplayed && <nav className={styles.hamburger_nav} ref={node}>
            <div></div>
            <ul className={styles.hamburger_list} >

                {pages.map(page => <li key={page} 
                tabIndex='0' 
                className={styles.hamburger_items}
                onClick={menuClicked}
                >{page}</li>)}

                <li className={styles.hamburger_items}>
                    <a href="tel:785-625-5500">
                        Call &nbsp;
                        <FontAwesomeIcon
                            icon={faPhone}
                            tabIndex='0'
                            onBlur={menuClicked}
                        />
                    </a>
                </li>  
            </ul>
        </nav>}
        </>
    )
}