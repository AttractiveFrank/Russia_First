import '../css/cards.css'
import roundIMg from '../img/Ellipse 18.svg'
import teleImg from '../img/bxl_telegram.svg'
import videoImg from '../img/image 5421.svg'

const Cards = () => {
    return <div>
        <div className='threeCards'>
            <div className='threeCard'>
                <img className='roundImgStyle' src={roundIMg} />
                <div className='x18'>Площадки ЗАВОД ШОУ - Площадки | Ивент | Концерт | Мероприятия | Решения и концепции</div>
                <div className='x18_2'>481 подписчик</div>
                <div className='flex'>
                    <div className='DarkBtn'>
                        <div>ЧИТАТЬ В ТЕЛЕГРАМ</div>
                        <div className='teleImage'><img src={teleImg} /></div>
                    </div>
                    <div></div>
                </div>
            </div>

            <div className='threeCard'>
                <div className='x12_2'>Площадки ЗАВОД ШОУ - Площадки | Ивент | Концерт |<br /> Мероприятия | Решения и концепции</div>,
                <img className='videoImg' src={videoImg} />
                <div>Всем привет! Делимся прошедшим туром с Ириной<br />
                    Круг.Ребята снимают целые влоги, делимся<br /> частичкой 🤝
                </div>
                <a href='#' className='x12_2'>ЧИТАТЬ ПОСТ</a>
            </div>

            <div className='threeCard'>
                <div className='x12_2'>Площадки ЗАВОД ШОУ - Площадки | Ивент | Концерт |<br /> Мероприятия | Решения и концепции</div>,
                <img className='videoImg' src={videoImg} />
                <div>Всем привет! Делимся прошедшим туром с Ириной<br />
                    Круг.Ребята снимают целые влоги, делимся<br /> частичкой 🤝
                </div>
                <a href='#' className='x12_2'>ЧИТАТЬ ПОСТ</a>
            </div>
        </div>
    </div >
}

export default Cards;