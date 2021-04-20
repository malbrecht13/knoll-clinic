import styles from './footer.module.scss'
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p className={styles.copyright}>Knoll Clinic &copy;2021</p>
            <div className={styles.facebook_icon__container}>
                <SocialIcon 
                url="https://www.facebook.com/KnollClinic/?ref=hl" 
                className={styles.facebook_icon}
                />
                <p className={styles.follow_on_facebook}>Follow on Facebook</p>
            </div>
        </footer>
    );
}

export default Footer;