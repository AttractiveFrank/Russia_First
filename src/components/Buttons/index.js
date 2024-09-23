import { darkArrowup, darkTelegramRound, lightArrow } from '../../assets'
import './button.css'

const DefaultButton = ({ title }) => (
  <button className="button defaultButton" >{title}</button>
)

const BlackButton = ({ title }) => (
  <button className="button defaultButton blackButton" >{title}</button>
)
const BlackButtonBorderWhite = ({ title }) => (
  <button className="button defaultButton blackButton" style={{ border: '1px solid white' }} >{title}</button>
)

const TabButton = ({ icon, title }) => (
  <button className='button tabButton'><img src={icon} alt='darkAdd' />{title}</button>
)

const SmallTabButton = ({ title }) => (
  <button className='button tabButton smallTabButton'>{title}</button>
)

const CircleButton = ({ icon }) => (
  <button className="button circleButton"><img src={icon} alt='darkTelegram' /></button>
)

const OutLinedButton = ({ title }) => (
  <button className="button defaultButton outLinedButton" >{title}</button>
)


const BigTransButton = ({ title, long }) => (
  <button className={`button transButton bigTransButton ${long ? 'bigTransButtonPadding' : ''}`}>{title}</button>
)

const SmallTransButton = ({ title }) => (
  <button className='button transButton smallTransButton'>{title}</button>
)

const RectButton = ({ title }) => (
  <button className="button rectButton" >{title}</button>
)

const ArrowDefaultButton = ({ title }) => (
  <button className="button defaultButton " style={{ height: '39px' }}>{title}<img src={darkArrowup} alt='arrowButton' /></button>
)
const ArrowBlackButton = ({ title }) => (
  <button className="button defaultButton blackButton" style={{ height: '39px' }}>{title}<img src={lightArrow} alt='arrowButton' /></button>
)
const BigArrowBlackButton = ({ title }) => (
  <button className="button defaultButton blackButton" style={{ height: '48px' }}>{title}<img src={darkTelegramRound} alt='arrowButton' /></button>
)

const HeroTopButton = ({ title }) => (
  <button className='heroTopbutton'>{title}</button>
)

const SmallHeroLinkButton = ({ title }) => (
  <button className='smallHeroButton'>{title}</button>
)

const LinkButton = ({ title }) => (
  <span className='linkButton'>{title}</span>
)

const QuestionButton = ({ title }) => (
  <button className="button questionButton">{title}</button>
)


export {
  DefaultButton,
  BlackButton,
  TabButton, SmallTabButton,
  CircleButton,
  OutLinedButton,
  SmallTransButton, BigTransButton,
  RectButton,
  ArrowDefaultButton, ArrowBlackButton, BigArrowBlackButton,
  HeroTopButton,
  SmallHeroLinkButton,
  LinkButton,
  QuestionButton,
  BlackButtonBorderWhite
}