import React from 'react'
import { BigArrowBlackButton, BlackButton, LinkButton } from '../Buttons'
import { CardBadge, CardViewNumber } from '../Badges'
import './card.css'

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

const VideoBlogCard = ({ item }) => (
  <div className='blogCard videoBlogCard'>
    <p>{item.content}</p>
    <video style={{ width: '100%', height: 'clamp(168px, 15vw,201px)' }}>

    </video>
    <p className='videoBlogCardDescription'>{item.description}</p>
    <LinkButton title='ЧИТАТЬ ПОСТ' />
  </div>
)

const EventWorksCard = ({ item }) => (
  <div className='eventWorksCard'>
    <div style={{ position: 'relative' }}>
      <img src={item.img} alt='eventWorksImage' />
    </div>
    <div style={{ padding: 'clamp(20px, 2vw, 25px) 0 clamp(20px, 2vw, 25px) 0', }}>
      <p className='eventTitle'>{item.title}</p>
    </div>
    {
      item.tags.map((tag, index) => (
        <button key={index} className="eventTags" >{tag}</button>
      ))
    }
  </div>
)

export {
  PendingCard, PublicationCard, TextBlogCard, VideoBlogCard,
  EventWorksCard,
}