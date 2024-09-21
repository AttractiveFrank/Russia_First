import { chicha102, chicha107, chicha72 } from "../../assets"
import { SmallChichaRound } from "../../components/BoxRound"
import { PendingCard } from "../../components/Cards"
import { TreeChichas } from "../../components/Chichas"

import { pendingCardInfo } from "../../constant/group"

const PendingSection = () => {


  return (
    <div className="pendingSquare section" style={{ position: 'relative' }}>
      <div className="chichaShow">
        <TreeChichas img1={chicha102} img2={chicha107} img3={chicha72} />
      </div>
      <div className="chichaHidden">
        <SmallChichaRound right={-1} top={-1} />
      </div>
      <p className="sectionTitle sectionHeader" style={{ color: `var(--primaryBgColor)`, width: '90%' }}>Проверьте идею заранее<br /> и сократите риски</p>
      <div className="flexWrap itemCenter" style={{ gap: '40px' }}>
        {pendingCardInfo.map((item, index) => (
          <PendingCard key={index} item={item} />
        ))}
      </div>
    </div>
  )
}

export default PendingSection