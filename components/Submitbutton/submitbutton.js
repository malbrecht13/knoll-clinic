import styles from './submitbutton.module.scss';

const Submitbutton = ({text}) => {
    return (
        <button className={styles.submit_btn}>
            {text}
        </button>
    )
};

export default Submitbutton;