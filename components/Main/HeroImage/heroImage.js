import styles from './heroImage.module.scss';

export default function HeroImage() {
    return (
        <>
        <div className={styles.hero_image_div}>
        <img
            src="/Images/Knoll_clinic.jpg"
            tabIndex='0'
            layout='responsive'
            width={980}
            height={338}
            alt='Knoll clinic building'
            className={styles.hero_image}
            />
        </div>
        </>

    );
}