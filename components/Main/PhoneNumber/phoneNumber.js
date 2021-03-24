import styles from './phoneNumber.module.scss';

export default function PhoneNumber() {
    return (
        <h3 className={styles.phone_link}><a href="tel:785-625-5500">Call Us: 785-625-5500</a></h3>
    );
}