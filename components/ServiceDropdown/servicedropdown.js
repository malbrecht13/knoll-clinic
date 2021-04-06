import styles from './servicedropdown.module.scss'
import Serviceheader from './Serviceheader/serviceheader'
import Servicelist from './Servicelist/servicelist'
import Image from 'next/image'

const services = [
    { 
        category: 'Physicals',
        list: ['DOT physicals', 'Well child checks', 'Pap smears', 'Pre-employment physicals', "Workman's Comp."],
    },
    {
        category: 'Procedures',
        list: ['Botox injections for migraines', 'Laceration repair', 'Lesion/mole removal', 'Skin biopsy', 'Minor surgery', 'Allergy testing with immunotherapy if necessary', 'Steroid injections', 'Joint injections', 'Trigger point injections', 'Dental blocks', 'Hemorrhoid treatment', 'Ingrown toenail repair', 'Ear washes', 'Spirometry/pulmonary function testing', 'EKG'],
    },
    {
        category: 'Disease Management',
        list: ['High blood pressure', 'COPD/emphysema', 'Asthma', 'Acne', 'Cholesterol', 'Diabetes', 'Migraines', 'Weight management']
    },
    {
        category: 'In-House Lab Testing',
        list: ['PT/INR (Coumadin testing)', 'Strep screening', '"Mono" screening', 'RSV (respiratory syncytial virus) testing', 'Urinalysis', 'Hemoglobin A1c', 'H. pylori testing', 'Pregnancy test', 'Hemoccult colon cancer screening', 'Urine drug screen']
    },
    {
        category: 'Vaccinations',
        list: ['Tetanus vaccine', 'Influenza vaccine']
    },
    {
        category: 'Other',
        list: ['Vitamin B12 injections', 'Testosterone injections']
    }
]

const Servicedropdown = () => {
    
    return (
        <>
        <h2 className={styles.service_page_heading}>Knoll Clinic Services</h2>
        <Image 
            src='/Images/service_image.jpg'
            alt='Provider service image'
            width={1920}
            height={1279}
            layout='responsive'
        />
        <h3 className={styles.click_category_header}>Click a category below to expand its list of services</h3>
        <div className={styles.services_outer_container}>
            {services.map(service => {
                return <div className={styles.service_container} 
                key={service.category} 
                >
                    <details>
                    <summary className={styles.summary}>
                    <Serviceheader 
                    category={service.category}
                    />
                    </summary>
                    <Servicelist
                    category={service.category}
                    list={service.list}
                    />
                    </details>
                    
                </div>
        })}
        </div>
        </>
    );
}

export default Servicedropdown;