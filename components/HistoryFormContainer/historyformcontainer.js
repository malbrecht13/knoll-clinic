import Link from 'next/link';
import Image from 'next/image';
import styles from './historyformcontainer.module.scss';


const HistoryFormContainer = ({forms}) => {
    return (
        <>
            <h2 className={styles.page_title}>Forms</h2>
            {forms.map(form => (
                <div key={form.id} className={styles.form_container}>
                    <Link href={form.file}>
                        <div className={styles.form_thumbnail_and_caption}>
                            <Image 
                                src={form.thumbnail}
                                alt={form.name}
                                width={100}
                                height={130}
                            />
                            <p className={styles.form_caption}>
                                {form.name}
                            </p>
                        </div>
                    </Link>
                </div>
            ))}
        </>
    );
}

export default HistoryFormContainer;