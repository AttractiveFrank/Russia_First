import WorkProcess from './WorkProcess'
import HeroSample from '../../components/HeroSample/HeroSample'
import SwiperSection from '../../components/Swiper/Swiper'
import ExampleCase from './ExampleCase'
import { firstHeroMultiLink, mobileFirestHeroMultiLink } from '../../constant/group'
import { heroBgImg } from '../../assets'
import ContactSection from '../home/ContactSection'
import BlogSection from '../home/BlogSection'
import './visualization.css'


const Visualization = () => {
  return (
    <div className="wrapper">
      <div className='container'>
        <HeroSample HeroMultiLink={firstHeroMultiLink} mobileHeroMultiLink={mobileFirestHeroMultiLink} bgUrl={heroBgImg} />
        <WorkProcess />
        <ExampleCase />
        <SwiperSection />
        <ContactSection title="Заказать расчёт 3D" />
        <BlogSection />
      </div>
    </div>
  )
}

export default Visualization