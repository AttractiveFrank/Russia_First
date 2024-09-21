import {
  caseImg2,
  caseImg3,
  caseImg4,
  caseImg5,
  pending1, pending2, Savatar1, Svideo1, Svideo2,
  portfolio1, portfolio2, portfolio3, portfolio4, portfolio5, portfolio6, portfolio7, portfolio8, portfolio9,
  publication1, publication2, publication3, publication4, publication5, publication6,
  textBlog,
  smallCardVideo,
  heroBgImg,
} from "../assets"

const menuItemsData = [
  {
    title: 'КОМАНДА',
    url: '/',
  },
  {
    title: 'УСЛУГИ',
    submenu: [
      {
        title: 'ТЕХНИЧЕСКИЕ УСЛУГИ',
        submenu: [
          { title: 'Свет', url: '' },
          { title: 'Звук', url: '' },
          { title: 'Видео', url: '' },
          { title: 'Одежда сцены и линолеум', url: '' },
        ]
      },
      {
        title: 'ФИРМЕННЫЕ УСЛУГИ',
        submenu: [
          { title: 'Разработка шоу', url: '' },
          { title: '3D-визуализация', url: '' },
          { title: 'База для репетиций', url: '' },
        ]
      },
      {
        title: 'ПРОДАКШН',
        submenu: [
          { title: 'События', url: '' },
          { title: 'Концерты и туры', url: '' },
        ]
      },
    ],
  },
  { title: 'КЕЙСЫ', url: '/about', },
  { title: 'ПЛОЩАДКИ', url: '/about', },
  { title: 'ОБОРУДОВАНИЕ', url: '/about', },
  { title: 'КОНТАКТЫ', url: '/about', },
]

const footerTopLink = [
  { title: "КОМАНДА", url: "" },
  { title: "КЕЙСЫ", url: "" },
  { title: "ПЛОЩАДКИ", url: "" },
  { title: "ОБОРУДОВАНИЕ", url: "" },
  { title: "КОНТАКТЫ", url: "" },
]

const swiperData = [
  {
    type: "video",
    name: "Имя Фамилия",
    image: Svideo1,
    content: "video"
  },
  {
    type: "video",
    name: "Имя Фамилия",
    image: Svideo2,
    content: "video"
  },
  {
    type: "text",
    name: "Имя Фамилия",
    image: Savatar1,
    content: "Lörem ipsum kaliga iskapet makrod gigaktiga olåss. Dinyns bins megasam hundvissla fast reavis. Stenohydat stupstockspolitik inte dirade men koscheria. Restdejting desk med div även om pong, viras. Ten ultraren sadons möbelhund ningen.  Lörem ipsum kaliga iskapet makrod gigaktiga olåss. Dinyns bins megasam  Lörem ipsum kaliga iskapet makrod gigaktiga olåss. Dinyns bins megasam hundvissla fast reavis. Stenohydat stupstockspolitik inte dirade men koscheria. Restdejting desk med div även om pong, viras. Ten ultraren sadons möbelhund ningen.  Lörem ipsum kaliga iskapet makrod gigaktiga olåss. Dinyns bins megasam Lörem ipsum kaliga iskapet makrod gigaktiga olåss. Dinyns bins megasam hundvissla fast reavis. Stenohydat  "
  },
  {
    type: "video",
    name: "Имя Фамилия",
    image: Svideo1,
    content: "video"
  },

  {
    type: "text",
    name: "Имя Фамилия",
    image: Savatar1,
    content: "Lörem ipsum kaliga iskapet makrod gigaktiga olåss. Dinyns bins megasam hundvissla fast reavis. Stenohydat stupstockspolitik inte dirade men koscheria. Restdejting desk med div även om pong, viras. Ten ultraren sadons möbelhund ningen.  Lörem ipsum kaliga iskapet makrod gigaktiga olåss. Dinyns bins megasam  Lörem ipsum kaliga iskapet makrod gigaktiga olåss. Dinyns bins megasam hundvissla fast reavis. Stenohydat stupstockspolitik inte dirade men koscheria. Restdejting desk med div även om pong, viras. Ten ultraren sadons möbelhund ningen.  Lörem ipsum kaliga iskapet makrod gigaktiga olåss. Dinyns bins megasam Lörem ipsum kaliga iskapet makrod gigaktiga olåss. Dinyns bins megasam hundvissla fast reavis. Stenohydat  "
  }
]

const galleryInfo = [
  { img: portfolio1, top: 0, width: 463, },
  { img: portfolio2, top: 212, width: 360, },
  { img: portfolio3, width: 259, top: 38, },
  { img: portfolio4, width: 359, top: 27, },
  { img: portfolio5, width: 360, top: 136, },
  { img: portfolio6, width: 400, top: 0, },
  { img: portfolio7, width: 260, top: 212, },
  { img: portfolio8, width: 260, top: 145, },
  { img: portfolio9, width: 660, top: 249, },
]

const pendingCardInfo = [
  {
    img: pending1,
    title: '3D-визуализация',
    description: 'Смоделируем несколько вариантов оформления сцены и выберем наиболее подходящий под требования',
  },
  {
    img: pending2,
    title: 'Репетиционная база',
    description: 'Возможность проверки идеи мероприятия в реалистичных условиях вместе с репетициями артистов',
  },
]

const publicationCardInfo = [
  {
    img: publication1,
    viewNumber: 2300,
    title: '1930 Moscow',
    description: 'Россия, Москва',
  },
  {
    img: publication2,
    viewNumber: 2300,
    title: '1930 Moscow',
    description: 'Россия, Москва',
  },
  {
    img: publication3,
    viewNumber: 2300,
    title: '1930 Moscow',
    description: 'Россия, Москва',
  },
  {
    img: publication4,
    viewNumber: 2300,
    title: '1930 Moscow',
    description: 'Россия, Москва',
  },
  {
    img: publication5,
    viewNumber: 2300,
    title: '1930 Moscow',
    description: 'Россия, Москва',
  },
  {
    img: publication6,
    viewNumber: 2300,
    title: '1930 Moscow',
    description: 'Россия, Москва',
  },
]

const blogCardInfo = [
  {
    type: 'text',
    url: textBlog,
    content: 'Площадки ЗАВОД ШОУ - Площадки | Ивент | Концерт | Мероприятия | Решения и концепции',
    viewNumber: '481',
  },
  {
    type: 'video',
    url: smallCardVideo,
    content: 'Площадки ЗАВОД ШОУ - Площадки | Ивент | Концерт | Мероприятия | Решения и концепции',
    description: 'Всем привет! Делимся прошедшим туром с Ириной Круг. Ребята снимают целые влоги, делимся частичкой 🤝',
  },
  {
    type: 'video',
    url: smallCardVideo,
    content: 'Площадки ЗАВОД ШОУ - Площадки | Ивент | Концерт | Мероприятия | Решения и концепции',
    description: 'Всем привет! Делимся прошедшим туром с Ириной Круг. Ребята снимают целые влоги, делимся частичкой 🤝',
  },
]

const firstHeroMultiLink = [
  {
    title: "Раскрытие концепции",
    url: ""
  },
  {
    title: "Сокращение рисков и реализации",
    url: ""
  },
  {
    title: "Выбор из нескольких вариантов",
    url: ""
  },
  {
    title: "Мягкий переход к реализации",
    url: ""
  }
]

const mobileFirestHeroMultiLink = [
  {
    title: "Выбор из нескольких вариантов",
    url: ""
  },
  {
    title: "Сокращение рисков и реализации",
    url: ""
  },
  {
    title: "Раскрытие концепции",
    url: ""
  },
  {
    title: "Мягкий переход к реализации",
    url: ""
  }
]

const secondHeroLink = [
  {
    title: "Базовая одежда сцены и покрытие",
    url: ""
  },
  {
    title: "Полное электрооснащение",
    url: ""
  },
  {
    title: "Просторный зрительный зал",
    url: ""
  },
  {
    title: "Хорошая акустика",
    url: ""
  }
]

const mobileSecondHeroLink = [
  {
    title: "Базовая одежда сцены и покрытие",
    url: ""
  },
  {
    title: "Хорошая акустика",
    url: ""
  },
  {
    title: "Полное электрооснащение",
    url: ""
  },
  {
    title: "Просторный зрительный зал",
    url: ""
  }
]

const workProcessInfo = [
  {
    title: "Подготовка",
    content: ["1) Подберем подходящие примеры площадок",
      "2) Соберем все пожелания и требования от заказчика",
      "3) Подготовим все варианты форматов мероприятия",
    ],
  },
  {
    title: "Моделирование",
    content: ["1) Создадим и визуализируем варианты идей реализации",
      "2) Согласуем варианты с представителями заказчика",
      "3) Подберем оборудование для выбранной концепции",
    ],
  },
  {
    title: "Документация",
    content: ["1) Подготовим полный пакет документов для реализации", "2) Предложим услуги реализации", "button"]
  },

]


const caseExampleInfo = [
  {
    url: caseImg2,
    title: "Название мероприятия",
    text: "Место его проведения"
  },
  {
    url: caseImg3,
    title: "Название мероприятия",
    text: "Место его проведения"
  },
  {
    url: caseImg4,
    title: "Название мероприятия",
    text: "Место его проведения"
  },
  {
    url: caseImg5,
    title: "Название мероприятия",
    text: "Место его проведения"
  },
]

// const heroSectionInfo = [
//   {
//     flag: 1,
//     bgUrl: heroBgImg,
//     title: '3D-визуализация для проверки идей и концепций',
//     defaultBtn: 'заказать расчёт',

//   }
// ]

export {
  menuItemsData, footerTopLink, swiperData,

  galleryInfo, pendingCardInfo, publicationCardInfo, blogCardInfo, firstHeroMultiLink, mobileFirestHeroMultiLink, workProcessInfo, caseExampleInfo,

  secondHeroLink, mobileSecondHeroLink
}