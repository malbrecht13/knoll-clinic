import styles from './mainlayout.module.scss'

const Mainlayout = props => (
    <main className={styles.main_layout}>
        {props.children}
    </main>
);

export default Mainlayout;