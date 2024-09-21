import React, { useState } from 'react'
import { BigArrowBlackButton, BlackButton, LinkButton } from '../Buttons'
import { CardBadge, CardViewNumber } from '../Badges'
import { whitePlay } from '../../assets'
import './card.css'
import VideoPreview from './UserCard/Preview/VideoPreview'

const PendingCard = ({ item }) => (
  <div className='pendingCard'>
    <img src={item.img} alt='pendingImage' />
    <div className='pendingCardContent'>
      <div>
        <p className='cardBigTitle' style={{ paddingTop: '4px' }}>{item.title}</p>
        <p className='cardDescription' style={{ maxWidth: '355px' }}>
          {item.description}
        </p>
      </div>
      <BlackButton title='ПОДРОБНЕЕ' />
    </div>
  </div>
)

const PublicationCard = ({ item }) => (
  <div className='publicationCard'>
    <div style={{ position: 'relative' }}>
      <img src={item.img} alt='publicationImage' />
      <CardViewNumber value={item.viewNumber} />
    </div>
    <div className='spaceBetween' style={{ padding: 'clamp(20px, 4vw, 25px) 0 clamp(8px, 2vw, 12px) 0' }}>
      <p className='cardTitle'>{item.title}</p>
      <div className='alignCenter'>
        <CardBadge title='Ресторан' />
        <CardBadge title='Ещё 6' />
      </div>
    </div>
    <p style={{ paddingBottom: 'clamp(20px, 4vw, 25px)' }}>{item.description}</p>
    <BlackButton title='ПОДРОБНЕЕ' />
  </div>
)

const TextBlogCard = ({ item }) => (
  <div className='blogCard textBlogCard'>
    <img className='textBlogCardImg' src={item.url} alt='textBlog' />
    <p>{item.content}</p>
    <p className='textBlogCardNumber'>{item.viewNumber} подписчик</p>
    <div><BigArrowBlackButton title='ЧИТАТЬ В ТЕЛЕГРАМ' /></div>
  </div>
)

const VideoBlogCard = ({ item }) => {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }
  return (
    <>
      <div className='blogCard videoBlogCard'>
        <p>{item.content}</p>
        <div style={{ position: 'relative' }}>
          <video style={{ width: '100%', height: 'clamp(168px, 15vw,201px)', borderRadius: '5px' }}>
            <source src={item.url} type="video/mp4" />
          </video>
          <img src={whitePlay} onClick={handleOpen} alt="whitePlay" className='whitePlayImg' />
        </div>
        <p className='videoBlogCardDescription'>{item.description}</p>
        <LinkButton title='ЧИТАТЬ ПОСТ' />
      </div>
      <VideoPreview open={open} setOpen={setOpen} avatar={item.url} />
    </>
  )
}

export {
  PendingCard, PublicationCard, TextBlogCard, VideoBlogCard,
}