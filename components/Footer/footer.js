import styles from './footer.module.scss'
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer_text}>
            <p className={styles.copyright}>Knoll Clinic &copy;2021</p>
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