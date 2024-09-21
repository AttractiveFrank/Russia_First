import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'; // Add Pagination and Navigation modules if needed
import { swiperData } from '../../constant/group';
import VideoCard from '../Cards/UserCard/VideoCard';
import TextCard from '../Cards/UserCard/TextCard';
import './swiper.css';

const SwiperSection = () => {
  const swiperRef = useRef(null);

  return (
    <section className="pageWrapper">
      <div className="section" style={{ overflow: 'hidden' }}>
        <div className="sectionTitle swiperTitle">Используем в работе</div>
        <div style={{ marginTop: '85px' }}>
          <Swiper
            spaceBetween={70}
            centeredSlides={true}
            grabCursor={true}
            loop={true}
            autoplay={{
              delay: 2000,                // Delay between slides
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 50,
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1400: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            modules={[Autoplay]}
            ref={swiperRef}
          >
            {swiperData.map((item, index) => (
              <SwiperSlide key={index}>
                {item.type === 'video' ? (
                  <VideoCard name={item.name} avatar={item.image} />
                ) : (
                  <TextCard name={item.name} avatar={item.image} content={item.content} />
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default SwiperSection;