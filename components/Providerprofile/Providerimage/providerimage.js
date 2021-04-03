import Image from 'next/image';
import styles from './provider.module.scss'

const Providerimage = ({provider}) => {
    return (
        <div className={styles.provider_image__container}>
            <Image 
                className={styles.provider_image__image}
                src={`/Images/Providers/${provider}.jpg`}
                alt={provider}
                width={204}
                height={275}
                layout="responsive"
            />
        </div>
    );
}