import { DefaultButton, HeroTopButton, SmallHeroLinkButton, SmallTabButton } from '../Buttons'
import './herosample.css'

const HeroSample = (props) => {
  const { firstHeroMultiLink, bgUrl } = props

  return (
    <section className='herosampleSection'>
      {/* <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
        </div>
        <div className='heroBg' style={{ backgroundImage: `url(${bgUrl})` }}>
        </div>
      </div> */}

      <div className='heroTopBtn'><HeroTopButton title="ФИРМЕННЫЕ УСЛУГИ" /></div>
      <p className='heroSectionTitle'>3D-визуализация для проверки идей и концепций</p>
      <div className='spaceBetween heroLinkWrap'>
        <div className='heroLinkLeft'>
          <DefaultButton title="заказать расчёт" />
        </div>
        <div className='heroLinkRight'>
          {
            firstHeroMultiLink.map((item, index) => (
              <div key={index} style={{ marginTop: '3px' }}><SmallHeroLinkButton title={item.title} /></div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default HeroSample