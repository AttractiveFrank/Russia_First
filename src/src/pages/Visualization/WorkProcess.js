import { downloadIcon, hlineArrow } from "../../assets"
import { DownloadButton } from "../../components/Buttons"
import { workProcessInfo } from "../../constant/group"
import { ChichaBox } from "../../components/ChichaBox"
import './visualization.css'

const WorkProcess = () => {
  const WorkProcessBtn = () => (
    <div className="alignCenter downloadBtnWrap" style={{ marginTop: '12px' }}>
      <DownloadButton icon={downloadIcon} title="Скачать пример документации" />
      <p className="pdfText" >PDF 2.1 Мб</p>
    </div>
  )

  const ProcessListObject = ({ item, index }) => (
    <div className="processItem">
      <div className="alignCenter" style={{ gap: '20px' }}>
        <p className="processListTitle">{item.title}</p>
        {index !== 2 &&
          <div className="alignCenter arrowShow" style={{ width: '100%' }}>
            <hr className="ArrowLine" />
            <div className="ArrowRect"></div>
          </div>}
      </div>
      {item.content.map((title, index) => (
        title !== "button" ?
          <p key={index} className="cardDescription">{title}</p> :
          <WorkProcessBtn key={index} />
      ))}

    </div>
  )

  const content = (
    <>
      <p className="sectionTitle" style={{ color: `var(--primaryBgColor)`, width: '90%', marginBottom: '10px' }}>3D-визуализация</p>
      <p className="sectionTitle" style={{ color: `var(--secondaryWhiteHover)`, width: '90%', marginBottom: '0px' }}>Наш процесс работы</p>
      <div className="flexWrapBetween workProcessSquare" style={{ gap: '15px' }}>
        {workProcessInfo.map((item, index) => (
          <ProcessListObject key={index} item={item} index={index} />
        ))}
      </div>

    </>
  )

  return (
    <ChichaBox content={content} />
  )
}

export default WorkProcess