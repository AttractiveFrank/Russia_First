import { ArrowDefaultButton } from "../../components/Buttons"
import { PublicationCard } from "../../components/Cards"
import { publicationCardInfo } from "../../constant/group"

const PortfolioSection = () => {


  return (
    <div className="section portfolioSection">
      <div className="spaceAround sectionHeader"  >
        <p className="sectionTitle">Работаем на площадках</p>
        <div className="chichaShow"><ArrowDefaultButton title='все площадки' /></div>
      </div>
      <div className="flexWrapAround" style={{ gap: '40px' }}>
        {publicationCardInfo.map((item, index) => (
          <PublicationCard key={index} item={item} />
        ))}
      </div>
      <div className="chichaHidden itemCenter" style={{ paddingTop: '40px' }}><ArrowDefaultButton title='все площадки' /></div>
    </div>
  )
}

export default PortfolioSection