import { useState } from 'react'
import { FaPhone } from "react-icons/fa6"
import { DefaultButton, TabButton } from '../../components/Buttons'
import { Input, TextArea } from '../../components/Inputs'
import { darkAdd, smallFatUser } from '../../assets'
import { SmallAvatar } from '../../components/Avatars'
import { Email } from '@mui/icons-material'

const inputinfo = [
  {
    title: 'ФИО',
    name: 'name',
    type: 'text',
    placeholder: 'Иванов Иван Иванович',
  },
  {
    title: 'Контакты',
    name: 'email',
    type: 'email',
    placeholder: 'Email, социальные сети, телефон',
  },
]

const ContactHeader = () => (
  <div className="contactTop" >
    <div className='flexWrapBetween'>
      <p className='sectionTitle'>У вас есть вопросы?</p>
      <p className='x18Font_2 chichaShow' style={{ maxWidth: '290px' }}>Оставьте заявку, и мы свяжемся с вами в ближайшее время</p>
    </div>
    <hr className='hrStyle' />
    <p className='x18Font_2 chichaHidden' style={{ maxWidth: '290px', marginBottom: '30px' }}>Оставьте заявку, и мы свяжемся с вами в ближайшее время</p>
  </div>
)

const ContactMiddle = ({ sendData, handleChange, handleSubmit }) => (
  <form className="contactMiddle flexWrap" onSubmit={handleSubmit}>
    <div className="formLeft">
      {inputinfo.map((item, index) => (
        <div key={index}>
          <p className='x16' style={{ marginBottom: '12px' }}>{item.title}</p>
          <Input item={item} handleChange={handleChange} />
        </div>
      ))}
    </div>
    <div className="formRight">
      <p className='x16' style={{ marginBottom: '12px' }}>Краткая информация о мероприятии</p>
      <TextArea
        name="content"
        value={sendData.content}
        onChange={handleChange}
        placeholder={'Какое хотите провести: частное, корпоративное, \nделовое, государственное?'}
      />
    </div>

    <div className="formLeft">
      <p className='x16' style={{ marginBottom: '12px' }}>Прикрепить файл</p>
      <div className='spaceBetween'>
        <TabButton icon={darkAdd} title='Выбрать файл' />
        <p className='x14' style={{ width: '137px' }}>Изображения и архивы до 150 Мб</p>
      </div>
    </div>
    <div className="formRight" style={{ display: 'flex', alignItems: 'flex-end' }}>
      <DefaultButton title='ОТПРАВИТЬ ЗАЯВКУ' />
    </div>
  </form>
)

const ContactFooter = () => (
  <div className='contactFooter spaceBetween' style={{ gap: '30px' }}>
    <div className='alignCenter' style={{ gap: '20px' }}>
      <SmallAvatar url={smallFatUser} />
      <div>
        <p className='x18' >Алексей Седов</p>
        <p className='x14' >Генеральный продюсер</p>
      </div>
    </div>
    <div style={{ display: 'grid', gap: '3px' }} >
      <p className='x18 alignCenter' style={{ gap: '11px' }}><Email />info@zavodshow.ru</p>
      <p className='x18 alignCenter' style={{ gap: '11px' }}><FaPhone />+7 906 065-28-33</p>
    </div>
    <p className='x14 alignCenter'>
      Задать вопрос напрямую<br /> генеральному директору
    </p>
  </div>
)
const ContactSection = () => {
  const [sendData, setSendData] = useState({
    name: '',
    email: '',
    content: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setSendData({ ...sendData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(sendData)
  }

  return (
    <div className='section'>
      <ContactHeader />
      <ContactMiddle sendData={sendData} handleChange={handleChange} handleSubmit={handleSubmit} />
      <hr className='hrStyle' />
      <ContactFooter />
    </div>
  )
}



export default ContactSection