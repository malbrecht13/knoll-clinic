import styles from './infoheader.module.scss';

const Infoheader = () => {

    //used for 'send us an email" link to scroll to contact_form on the contact page
    const linkID = "contact_form";

    const handleClick = (e) => {
        e.preventDefault();
        const target = document.getElementById(linkID);

        //element.scrollIntoView() is a native js method
        //scrollIntoView parameters
        //first param: alignToTop (if true, aligns to top of linked area)
        //second param: scrollIntoViewOptions (options are behavior, block, and inline)
        target.scrollIntoView({ behavior: 'smooth'});
    }

    return (
        <>
        <h2 className={styles.info_header}>Info/Contact</h2>
            <div className={styles.email_link_container}>
                <a className={styles.email_link} onClick={handleClick}>**Send us an e-mail**</a>
            </div>
        </>
    )
};

export default Infoheader;