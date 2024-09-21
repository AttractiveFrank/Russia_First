import { caseImg1 } from "../../assets"
import { caseExampleInfo } from "../../constant/group"

const ExampleCase = () => {
  return (
    <section className="section">
      <p className="sectionTitle" style={{ textAlign: "center" }}>Примеры кейсов с 3D-визуализацией</p>
      <div className="imgCardWrapper">
        <div className="caseLeftSection">
          <img src={caseImg1} alt="caseImg1" />
          <p className="caseImgTitle">Название мероприятия</p>
          <p className="caseImgText">Место его проведения</p>
        </div>
        <div className="caseRightSection">
          {
            caseExampleInfo.map((item, index) => (
              <div key={index} className="caseRightItem">
                <img src={item.url} alt={item.url} />
                <p className="caseImgTitle">{item.title}</p>
                <p className="caseImgText">{item.text}</p>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default ExampleCase