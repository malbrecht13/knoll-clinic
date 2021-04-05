import Providerimage from './Providerimage/providerimage'
import styles from './providerprofile.module.scss'

const providerProfiles = [
    { id: 1, provider: 'Doctor_Knoll', desc: 'Dr. Tonya Knoll D.O.', subdesc: 'Board Certified Family Medicine'},
    { id: 2, provider: 'Amy_Hale', desc: 'Amy Hale, ARNP', subdesc: ''}
]; //this will be passed as props to ProviderImage

const Providerprofiles = () => {
    return (
        <div className="provider_profile_container">
            <h2 className={styles.provider_profile_header}>Our providers</h2>
            {providerProfiles.map(profile => 
                <Providerimage 
                key={profile.id}
                provider={profile.provider}
                description={profile.desc}
                subdescription={profile.subdesc}
                 />
            )}
        </div>
    );
}

export default Providerprofiles;