import styles from './listwithheader'



const Listwithheader = ({title, body}) => {
    return (
        <section className="list_with_header_section">
            <h3 className="list_header">{title}</h3>
            {body.map(item =>
                <p className="contact_list_item">{item}</p>
            )}
        </section>
    );
}

export default Listwithheader;