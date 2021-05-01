import styles from './infoheader.module.scss';
import Image from 'next/Image';

const Infoheader = () => {

    //used for 'send us an email" link to scroll to contact_form on the contact page
    const linkID = "contact_form_goto";

    const handleClick = (e) => {
        e.preventDefault();
        const target = document.getElementById(linkID);

        //element.scrollIntoView() is a native js method
        //scrollIntoView parameters
        //first param: alignToTop (if true, aligns to top of linked area)
        //second param: scrollIntoViewOptions (options are behavior, block, and inline)
        target.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest'});
    }

    return (
        <>
        <h2 className={styles.info_header}>Info/Contact</h2>
            <Image 
                src="/Images/knoll_lobby.jpeg"
                alt="knoll clinic lobby photo"
                width={320}
                height={240}
            />
            <div className={styles.email_link_container}>
                <a className={styles.email_link} onClick={handleClick}>Request Info</a>
            </div>
        </>
    )
};

export default Infoheader;