import HeroSample from '../../components/HeroSample/HeroSample'
import { firstHeroMultiLink } from '../../constant/group'
import { heroBgImg } from '../../assets'
import './visualization.css'

const Visualization = () => {
  return (
    <div className="pageWrapper">
      <HeroSample firstHeroMultiLink={firstHeroMultiLink} bgUrl={heroBgImg} />
    </div>
  )
}

export default Visualization