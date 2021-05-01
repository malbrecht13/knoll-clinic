import styles from './provider.module.scss';
import Image from 'next/image';

const Providerimage = ({provider, description, subdescription}) => {
    return (
        <figure className={styles.provider_image__container}>
            <Image
                className={styles.provider_image__image}
                src={`/Images/Providers/${provider}.jpg`}
                alt={provider}
                width={204}
                height={275}
            />
            <figcaption className={styles.provider_image_caption}>
                {description}
                <br/>
                {subdescription}
            </figcaption>
        </figure>
    );
}

export default Providerimage;