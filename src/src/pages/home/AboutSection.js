import { chicha72, chicha94, design } from "../../assets"
import { BigTransButton, DefaultButton } from "../../components/Buttons"
import { TwoChichas } from "../../components/Chichas"

const AboutSection = () => {


  return (
    <div style={{ backgroundImage: `url(${design})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="aboutSection section">
        <div className="itemCenter sectionHeader" style={{ position: 'relative', gap: '30px', textAlign: 'center' }}>
          <div style={{ position: 'absolute', left: 'clamp(0px, 4vw, 40px)', bottom: -10, }}>
            <TwoChichas img1={chicha72} img2={chicha94} rotate='-15deg' />
          </div>
          <p className="sectionTitle">Спроектируем и настроим</p>
          <div style={{ position: 'absolute', right: 'clamp(0px, 4vw, 40px)', bottom: 10, }}>
            <TwoChichas img1={chicha94} img2={chicha72} rotate='-30deg' />
          </div>
        </div>
        <div className="flexWrap itemCenter" style={{ gap: '6px' }}>
          <BigTransButton title='ОДЕЖДУ СЦЕНЫ И ЛИНОЛЕУМ' long={true} />
          <div className="flexWrap" style={{ gap: '6px', }}>
            <BigTransButton title='CВЕТ' />
            <BigTransButton title='ЗВУК' />
            <BigTransButton title='ВИДЕО' />
          </div>
        </div>
        <div className="itemCenter" style={{ marginTop: 'clamp(40px, 5vw, 64px)' }}>
          <DefaultButton title='заказать обратный звонок' />
        </div>
      </div>
    </div>
  )
}

export default AboutSection