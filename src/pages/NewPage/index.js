import { Button, Container, Menu, MenuItem } from "@mui/material"
import { BigTransButton, BlackButton, CircleButton, DefaultButton, OutLinedButton, TabButton, SmallTransButton, SmallTabButton, RectButton, ArrowDefaultButton, ArrowBlackButton } from "../../components/Buttons"
import { darkAdd, darkTelegram, darkVK, logo } from '../../assets/index'
import MenuButton from "./menu"
import { menuItemsData } from "../../constant/group"

const NewPage = () => {

  return (
    <Container sx={{ padding: '200px 0', background: 'grey' }}>
      <img src={logo} alt="logo" />
      <div style={{ display: 'flex', gap: '20px' }}>
        {menuItemsData.map((item, index) =>
          (index !== 1 ? <Button key={index} item={item}>{item.title}</Button> : <Button key={index}><MenuButton item={item} /></Button>)
        )}
      </div>
      <>
        <DefaultButton title='ОСТАВИТЬ ЗАЯВКУ' /> <br />

        <BlackButton title='ПОДРОБНЕЕ' /> <br />

        <TabButton icon={darkAdd} title='Выбрать файл' /> <br />
        <SmallTabButton title='Одежда сцены и линолеум' /> <br />

        <CircleButton icon={darkTelegram} /> <br />

        <CircleButton icon={darkVK} /> <br />

        <OutLinedButton title='сбросить' /> <br />

        <SmallTransButton title='ТЕХНИЧЕСКИЕ УСЛУГИ' /> <br />

        <BigTransButton title='ОДЕЖДУ СЦЕНЫ И ЛИНОЛЕУМ' /> <br />

        <RectButton title='Наш мерч →' /> <br />

        <ArrowDefaultButton title='ВСЕ КЕЙСЫ ЗАВОД ШОУ' /> <br />

        <ArrowBlackButton title='ВСЕ КЕЙСЫ ЗАВОД ШОУ' /> <br />
      </>

    </Container>
  )
}

export default NewPage