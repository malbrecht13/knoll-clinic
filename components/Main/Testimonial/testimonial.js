import styles from './testimonial.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandsHelping } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const testimonial1 = {id: 1, text: '"Always friendly staff and compassionate care. Great about working you in short notice for urgent situations."', icon: faHandsHelping};
const testimonial2 = {id: 2, text: '"I have gone to Dr. Knoll for a few years and I appreciate that she was always really quick to get me in and there was little wait time. She has always been very kind and personable, I recommend her all the time."', icon: faHeart};
const testimonials = [testimonial1, testimonial2];

export default function Testimonial({heading}) {

    return (
        <aside>
            <h4 className={styles.testimonial_heading}>What people are saying about Knoll Clinic...</h4>
            {testimonials.map(testimonial => (
                <div className={styles.testimonial}>
                <p className={styles.testimonial_text}>{testimonial.text}</p>
                <FontAwesomeIcon 
                icon={testimonial.icon}
                className={styles.testimonial_icon}/>
            </div>
            ))}
        </aside>
    );
}