import { DefaultButton, HeroTopButton, SmallHeroLinkButton, SmallTabButton } from '../Buttons'
import './herosample.css'

const HeroSample = (props) => {
  const { HeroMultiLink, mobileHeroMultiLink, bgUrl } = props

  return (
    <>
      <div className='herotopBtn'>
        <HeroTopButton title="ФИРМЕННЫЕ УСЛУГИ" />
      </div>
      <section className='section heroBg'>
        <img src={bgUrl} alt='bgUrl' />
        <p className='heroTitle'>3D-визуализация для проверки идей и концепций</p>
        <div className='spaceBetween heroLinkWrap'>
          <div className='heroLinkLeft'>
            <DefaultButton title="заказать расчёт" />
          </div>
          <div className='heroLinkRight chichaShow'>
            {
              HeroMultiLink.map((item, index) => (
                <div key={index} style={{ marginTop: '3px' }}><SmallHeroLinkButton title={item.title} /></div>
              ))
            }
          </div>
          <div className='heroLinkRight chichaHidden'>
            {
              mobileHeroMultiLink.map((item, index) => (
                <div key={index} style={{ marginTop: '3px' }}><SmallHeroLinkButton title={item.title} /></div>
              ))
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default HeroSample