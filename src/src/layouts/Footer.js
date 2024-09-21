import { footerTopLink } from "../constant/group";
import { bigfooterLogo, darkTelegram, darkVK, smallfooterLogo, whiteMail, whitePhone } from "../assets";
import { CircleButton, DefaultButton } from "../components/Buttons";

const FooterTop = () => (
  <div className="footerTop">
    <div className="footerTopLeft">
      <img className="bigFooterLogo" alt="bigFooterLogo" src={bigfooterLogo} />
      <img className="smallFooterLogo" alt="smallFooterLogo" src={smallfooterLogo} />
    </div>
    <div className="footerTopRight">
      <div>
        {
          footerTopLink.map((item, index) => (
            <a className="footerTopLink" key={index} href={item.url}>{item.title}</a>
          ))
        }
      </div>
      <div style={{ display: "flex", gap: "10px" }} className="socialBtn">
        <div className="requestBtn1"><DefaultButton title="оСТАВИТЬ ЗАЯВКУ" /></div>
        <CircleButton icon={darkTelegram} alt="darkTelegram" />
        <CircleButton icon={darkVK} alt="darkVK" />
      </div>
    </div>
  </div>
)

const FooterMiddle = () => (
  <div className="footerMiddle">
    <div className="footerMiddleLeft">
      <DefaultButton title="оСТАВИТЬ ЗАЯВКУ" />
    </div>
    <div className="footerMiddleRight">
      <div className="middleOne box1">
        <a href="https://linkedin.com" className="middleTitle">РАЗРАБОТКА ШОУ</a>
        <a href="https://linkedin.com" className="middleLink">3D-визуализация</a>
        <a href="https://linkedin.com" className="middleLink">Репетиционная база</a>
      </div>
      <div className="middleOne box2">
        <a href="https://linkedin.com" className="middleTitle">ПРОДАКШН</a>
        <a href="https://linkedin.com" className="middleLink">События</a>
        <a href="https://linkedin.com" className="middleLink">Концерты и туры</a>
      </div>
      <div className="middleOne box3">
        <a href="https://linkedin.com" className="middleTitle">ТЕХНИЧЕСКИЕ УСЛУГИ</a>
        <div>
          <a href="https://linkedin.com" className="middleLink" style={{ marginRight: '28px' }}>Свет</a>
          <a href="https://linkedin.com" className="middleLink">Видео</a>
        </div>
        <div>
          <a href="https://linkedin.com" className="middleLink" style={{ marginRight: '28px' }}>Звук</a>
          <a href="https://linkedin.com" className="middleLink">Одежда сцены</a>
        </div>
      </div>
    </div>
  </div>
)

const FooterBottom = () => (
  <div className="footerTop">
    <div className="footerTopLeft footerContactWrap">
      <div className="alignCenter footerContact">
        <img src={whiteMail} alt="whiteMail" />&nbsp;<span>info@zavodshow.ru</span>
      </div>
      <div className="alignCenter footerContact" style={{ marginTop: '14px' }}>
        <img src={whitePhone} alt="whitePhone" />&nbsp;<span>+7 906 065-28-33</span>
      </div>
    </div>
    <div className="footerTopRight">
      <p className="footerContact">Москва, г. Реутов, ул. Победы, 20<br />Пн-Сб:&nbsp;10-19 МСК</p>
      <div className="footerTopLeft1">
        <div className="alignCenter footerContact">
          <img src={whiteMail} alt="whiteMail" />&nbsp;<span>info@zavodshow.ru</span>
        </div>
        <div className="alignCenter footerContact" style={{ marginTop: '14px' }}>
          <img src={whitePhone} alt="whitePhone" />&nbsp;<span>+7 906 065-28-33</span>
        </div>
      </div>
      <div className="footerBottomLink" style={{ marginBottom: '20px' }}>
        <a href="https://linkedin.com">© Завод Шоу</a>
        <a href="https://linkedin.com">Политика конфиденциальности</a>
        <a href="https://linkedin.com">Разработка сайта</a>
        <a href="https://linkedin.com">СОУТ</a>
      </div>
    </div>
  </div>
)

const Footer = () => {
  return (
    <footer className="pageWrapper">
      <div className="footerImg">
        <div className="footerWrapper">
          <FooterTop />
          <FooterMiddle />
          <hr />
          <FooterBottom />
        </div>
      </div>
    </footer>
  )
};

export default Footer;
