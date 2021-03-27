import styles from './textSection.module.scss'

const TextSection = ({title, body}) => {
    return (
        <section className={styles.text_container}>
            <h3 className={styles.text_container__title}>{title}</h3>
            <p className={styles.text_container__body}>{body}</p>
        </section>
    );
}

export default TextSection;