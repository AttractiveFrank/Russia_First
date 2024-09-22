import { chicha123, chicha94 } from "../../assets"
import { BlackButton, DefaultButton, SmallTabButton, SmallTransButton } from "../../components/Buttons"
import { BigOneChicha, TwoChichas } from "../../components/Chichas"
import { menuItemsData } from "../../constant/group"

const HeroSection = () => {

  const buttonGroupClassInfo = ['firstGroup', 'secondGroup', 'thirdGroup',]

  return (
    <div style={{ position: 'relative' }}>
      <div className="heroSection">
        <div className="section heroContent">
          <div className="chichaShow">
            {menuItemsData[1].submenu.map((item, index) => (
              <div key={index} className={`alignCenter ${buttonGroupClassInfo[index]}`} style={{ gap: '5px' }}>
                <SmallTransButton title={item.title} />
                {item.submenu.map((menu, idx) => (
                  <SmallTabButton key={idx} title={menu.title} />
                ))}
              </div>
            ))}
          </div>
          <p className="pageTitle" style={{ textAlign: 'left' }}>Технический продакшн</p>
          <p className="pageTitle" style={{ textAlign: 'right' }}>частных мероприятий</p>
          <div className="itemCenter">
            <div className="chichaHidden" style={{ gap: '4px', marginTop: '32px' }}>
              {menuItemsData[1].submenu.map((item, index) => (
                <SmallTransButton key={index} title={index === 0 ? 'ТЕХ. УСЛУГИ' : item.title} />
              ))}
            </div>
          </div>
          <div className="flexWrap itemCenter" style={{ gap: '12px', marginTop: '40px', marginBottom: '20px' }}>
            <DefaultButton title='ЛУЧШИЕ КЕЙСЫ' />
            <BlackButton title='ЗАПОЛНИТЬ БРИФ' />
          </div>
        </div>
      </div>
      <div>
        <div style={{ position: 'absolute', right: 0, bottom: 0 }}>
          <BigOneChicha img={chicha94} />
        </div>
        <div style={{ position: 'absolute', left: 0, bottom: -45 }}>
          <TwoChichas img1={chicha94} img2={chicha123} />
        </div>
      </div>
    </div>
  )
}

export default HeroSection