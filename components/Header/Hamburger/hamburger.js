import styles from './hamburger.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react'

const pages = ['Home', 'Services', 'About Us', 'Info']

export default function Hamburger(props) {

    function closeMenu() {
        props.onClick();
    }

    return (
        <nav className={styles.hamburger_nav} onBlur={closeMenu}>
            <div></div>
            <ul className={styles.hamburger_list}>
                {pages.map(page => <li key={page} tabIndex='0' className={styles.hamburger_items}>{page}</li>)}
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
        </nav>
    )
}