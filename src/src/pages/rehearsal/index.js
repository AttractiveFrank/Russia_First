import { secondHeroBg } from "../../assets";
import HeroSample from "../../components/HeroSample/HeroSample";
import { mobileSecondHeroLink, secondHeroLink } from "../../constant/group";

const Rehearsal = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <HeroSample HeroMultiLink={secondHeroLink} mobileHeroMultiLink={mobileSecondHeroLink} bgUrl={secondHeroBg} />
      </div>
    </div>
  )
}

export default Rehearsal;