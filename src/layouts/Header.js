import { useState } from "react";
import { useMediaQuery } from "@mui/material";
import { logo, search, darkVK, darkTelegram, hambuger } from "../assets";
import { CircleButton, DefaultButton, RectButton } from '../components/Buttons';
import HeaderLink from "./HeaderLink/HeaderLink";
import MobileHeaderLink from "./HeaderLink/MobileHeaderLink";
import './layout.css'

const Header = () => {
  const [isHambuger, setIsHambuger] = useState(false)
  const isMobile = useMediaQuery('(max-width: 833px)')

  const handleClick = () => {
    isHambuger === false ? setIsHambuger(true) : setIsHambuger(false)
  }

  const TopHeader = () => (
    <div className="spaceBetween">
      <img src={logo} alt="logo" />
      <div className="alignCenter headerInput">
        <img src={search} alt='search' />
        <input placeholder="пОИСК" />
      </div>
      <p className="phoneNumber">+7 (495) 720-12-82</p>
      <div className="circleBtnWrapper">
        <CircleButton icon={darkTelegram} />
        <CircleButton icon={darkVK} />
      </div>
      <div className="requestBtn">
        <DefaultButton title="ОСТАВИТЬ ЗАЯВКУ" />
      </div>
      <img className="hambugerImg" src={hambuger} onClick={handleClick} alt="hambuger" />
    </div>
  )

  const BottomHeader = () => (
    <div className="spaceBetween">
      {!isMobile && <HeaderLink />}
      <RectButton title="Наш мерч →" />
    </div>
  )

  return (
    <header className="pageWrapper">
      <div className="headerWrapper">
        <TopHeader />
        <hr />
        <BottomHeader />
        {isHambuger && isMobile && <MobileHeaderLink />}
      </div>
    </header>
  );
};

export default Header;
