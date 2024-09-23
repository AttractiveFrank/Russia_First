import { darkSmallUser } from '../../assets'
import './badges.css'

const CardViewNumber = ({ value }) => (
  <div className='cardViewNumber spaceAround'>
    <img src={darkSmallUser} alt='smallUser' />
    <p>от&nbsp;{value}</p>
  </div>
)

const CardBadge = ({ title }) => (
  <div className='cardBadge'>{title}</div>
)

const CaseCatalogCardBadge = ({ label }) => (
  <button className='caseCatalogCardBadgeButton'>
    {label}
  </button>
);







export { CardViewNumber, CardBadge, CaseCatalogCardBadge, }