import Image from 'next/image';
import styles from './heroImage.module.scss';

export default function HeroImage() {
    return (
        <>
        <div className={styles.hero_image_div}>
        <Image
            src="/knoll_clinic.png"
            tabindex='0'
            layout='responsive'
            width={980}
            height={338}
            objectFit='contain'
            alt='Knoll clinic building'
            className={styles.hero_image}
            />
        </div>
        </>

    );
}