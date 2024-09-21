import { chicha102, chicha107, chicha72 } from "../../assets"
import { PendingCard } from "../../components/Cards"
import { TreeChichas } from "../../components/Chichas"

import { pendingCardInfo } from "../../constant/group"

const PendingSection = () => {


  return (
    <>
      {/* <div className="pendingSquare"
      >
        <div className="section" style={{ position: 'relative' }}>
          <TreeChichas img1={chicha102} img2={chicha107} img3={chicha72} />
          <p className="sectionTitle sectionHeader" style={{ color: `var(--primaryBgColor)`, width: '90%' }}>Проверьте идею заранее<br /> и сократите риски</p>
          <div className="flexWrap itemCenter" style={{ gap: '40px' }}>
            {pendingCardInfo.map((item, index) => (
              <PendingCard key={index} item={item} />
            ))}
          </div>
        </div>
      </div> */}

      <div className="pendingSquare section" style={{ position: 'relative' }}>
        <div className="smallBoxSquare">
          <div className="smallBoxRound"></div>
        </div>
        <div className="smallBoxSquare smallBoxSquare1">
          <div className="smallBoxRound"></div>
        </div>
        <TreeChichas img1={chicha102} img2={chicha107} img3={chicha72} />
        <p className="sectionTitle sectionHeader" style={{ color: `var(--primaryBgColor)`, width: '90%' }}>Проверьте идею заранее<br /> и сократите риски</p>
        <div className="flexWrap itemCenter" style={{ gap: '40px' }}>
          {pendingCardInfo.map((item, index) => (
            <PendingCard key={index} item={item} />
          ))}
        </div>
      </div>
    </>
  )
}

export default PendingSection