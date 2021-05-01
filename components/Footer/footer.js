import styles from './footer.module.scss'
import Image from 'next/image';
import Link from 'next/link';

const pages = [
    {name: 'Home', route: '/'},
    {name: 'Services', route: '/services'},
    {name: 'About Us', route: '/about'},
    {name: 'Contact', route: '/contact'},
    {name: 'Forms', route: '/forms'}
];

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer_text}>
            <p className={styles.copyright}>Knoll Clinic &copy;2021</p>
            </div>
            <div className={styles.site_map}>
                <h5 className={styles.site_map_heading}>Site map</h5>
                <div className={styles.site_map_link_container}>
                    {pages.map(page => (
                        <Link key={page.name} className={styles.site_map_link} href={page.route}>
                            {page.name}
                        </Link>
                    ))}
                </div>
            </div>
            <div className={styles.facebook_icon__container}>
            <Link href="https://www.facebook.com/KnollClinic/?ref=hl">
                <Image 
                    src="/Images/f_logo.png" 
                    alt="facebook logo"
                    width={100}
                    height={100}
                    />
                </Link>
            </div>
        </footer>
    );
}

export default Footer;