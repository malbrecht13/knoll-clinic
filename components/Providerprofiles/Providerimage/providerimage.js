import styles from './provider.module.scss'

const Providerimage = ({provider, description, subdescription}) => {
    return (
        <figure className={styles.provider_image__container}>
            <img
                className={styles.provider_image__image}
                src={`/Images/Providers/${provider}.jpg`}
                alt={provider}
                width={204}
                height={275}
                layout="responsive"
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