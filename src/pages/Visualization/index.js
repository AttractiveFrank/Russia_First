import HeroSample from '../../components/HeroSample/HeroSample'
import { firstHeroMultiLink } from '../../constant/group'
import { heroBgImg } from '../../assets'
import './visualization.css'
import ShowConcept from './components/ShowConcept'
import EventWorks from '../../components/EventWorks'

const Visualization = () => {
  return (
    <div className="pageWrapper">
      <HeroSample firstHeroMultiLink={firstHeroMultiLink} bgUrl={heroBgImg} />
      {/* <ShowConcept /> */}
      <EventWorks />
    </div>
  )
}

export default Visualization