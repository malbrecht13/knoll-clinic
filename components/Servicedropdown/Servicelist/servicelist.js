import styles from './servicelist.module.scss'

const Servicelist = ({list}) => {
    return (
        <div className={styles.service_list_container}>
            {list.map(item =>
                <p key={item} className={styles.service_list_item}>{item}</p>
            )}
        </div>
    );
}

export default Servicelist;