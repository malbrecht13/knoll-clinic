import styles from './submitbutton.module.scss';

const Submitbutton = ({text}) => {
    return (
        <button type="submit" className={styles.submit_btn}>
            {text}
        </button>
    )
};

export default Submitbutton;