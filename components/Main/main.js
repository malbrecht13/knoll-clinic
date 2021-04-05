import HeroImage from './HeroImage/heroImage'
import PhoneNumber from './PhoneNumber/phoneNumber'
import Testimonial from './Testimonial/testimonial'
import Addressbanner from './AddressBanner/addressbanner'

export default function Main() {

    
    return (
        <main >
          <Addressbanner/>
          <HeroImage/>
          <PhoneNumber />
          <Testimonial />
        </main>
    );
}