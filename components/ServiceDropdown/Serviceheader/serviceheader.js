import styles from './serviceheader.module.scss'

const Serviceheader = ({category}) => {

    return (
        <div className={styles.service_header_container}>
            <h2 className={styles.service_header}>{category}</h2>
        </div>
    );
}

export default Serviceheader;