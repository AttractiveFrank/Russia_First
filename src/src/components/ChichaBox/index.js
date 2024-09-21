import { chicha102, chicha107, chicha72 } from "../../assets"
import { TreeChichas } from "../Chichas"

const ChichaBox = ({ content }) => (
  <section className="pendingSquare section" style={{ position: 'relative' }}>
    <div className="smallBoxSquare">
      <div className="smallBoxRound"></div>
    </div>
    <div className="smallBoxSquare smallBoxSquare1">
      <div className="smallBoxRound"></div>
    </div>
    <TreeChichas img1={chicha102} img2={chicha107} img3={chicha72} />
    {content}
  </section>
)

export { ChichaBox }