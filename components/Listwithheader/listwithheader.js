import styles from './listwithheader.module.scss'


const Listwithheader = ({title, body}) => {
    return (
        <section className={styles.list_with_header_section}>
            <h3 className={styles.list_header}>{title}</h3>
            {body.map(item =>
                <p key={item} className={styles.contact_list_item}>{item}</p>
            )}
        </section>
    );
}

export default Listwithheader;