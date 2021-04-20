import styles from './textarea.module.scss';

const Textarea = ({name, placeholder, handleChange}) => {
    const changeHandler = (e) => {
        const value = e.target.value;
        handleChange(name, value);
    }
    
    return (
        <div className={styles.textarea_container}>
            <label htmlFor={name}>Questions/Comments:</label>
            <textarea rows="10" 
            className={styles.textarea} 
            name={name} 
            id={name} 
            placeholder={placeholder} 
            required
            onChange={changeHandler}
            >

            </textarea>
        </div>
    );
};

export default Textarea