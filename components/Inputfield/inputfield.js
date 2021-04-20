import styles from './inputfield.module.scss';

const Inputfield = ({type, name, placeholder, handleChange}) => {
    const changeHandler = (e) => {
        const value = e.target.value;
        handleChange(name, value);
    }
    
    return (
        <div className={styles.input_container}>
            <label 
            htmlFor={name}
            className={styles.input_label}
            >{name}: </label>
            <input
            className={styles.input_field} 
            type={type}
            name={name}
            id={name}
            maxLength="30"
            placeholder={placeholder}
            required
            onChange={changeHandler}
            />
        </div>
    )
}

export default Inputfield;