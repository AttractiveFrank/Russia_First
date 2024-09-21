import { useState, useEffect } from 'react';
import { galleryInfo, smallgalleryInfo } from '../../constant/group';
import { portfolio1, portfolio2, portfolio3, portfolio4, portfolio5, portfolio6, portfolio7, portfolio8, portfolio9 } from '../../assets';

const GallerySection = () => {
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='hero_wrapper section'>
      <p className='sectionHeader sectionTitle' style={{ textAlign: 'center' }}>
        Лучшие кейсы из портфолио
      </p>
      {screenSize >= 1331 ? (
        <div className='hero_main'>
          {galleryInfo.map((image, index) => (
            <div key={index} style={{ width: `${image.width}px` }}>
              <img
                src={image.img}
                alt={image.title}
                style={{ marginTop: `${image.top}px`, width: '100%', height: 'auto' }}
              />
              <p className='x16'>{image.title}</p>
              <p className='x12'>{image.subtitle}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className='smallhero_main'>
          <div className='smallgallery'>
            <div >
              <img src={portfolio1} alt="smallgallery1" style={{ width: `clamp(158px, 40vw, 463px)`, height: '100%' }} />
            </div>
            <div style={{ paddingTop: `clamp(27px,10vw,115px)` }}>
              <img src={portfolio2} alt="smallgallery2" style={{ width: `clamp(125px, 30vw, 360px)`, height: '100%' }} />
            </div>
          </div>
          <div className='smallgallery'>
            <div style={{ display: 'flex', flexDirection: 'column', gap: `clamp(12px,5vw,30px)` }}>
              <img src={portfolio3} alt="smallgallery3" style={{ width: `clamp(124px, 30vw, 259px)`, height: `clamp(182px,40vw,277px)` }} />
              <img src={portfolio7} alt="smallgallery5" style={{ width: `clamp(124px, 30vw, 260px)`, height: `clamp(67px,20vw,140px)` }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: `clamp(18px,5vw,30px)`, justifyContent: 'space-between' }}>
              <img src={portfolio4} alt="smallgallery4" style={{ width: `clamp(158px, 40vw, 359px)`, height: `clamp(118px,30vw,181px)` }} />
              <img src={portfolio5} alt="smallgallery6" style={{ width: `clamp(158px, 40vw, 360px)`, height: `clamp(127px,30vw,180px)` }} />
            </div>

          </div>
          <div style={{ display: "flex", justifyContent: 'center' }}>
            <img src={portfolio6} alt="smallgallery6" style={{ width: `clamp(300px, 20vw, 400px)` }} />

          </div>
          <div className='smallgallery'>
            <img src={portfolio9} alt="smallgallery4" style={{ width: `clamp(158px, 40vw, 660px)`, }} />
            <img src={portfolio8} alt="smallgallery4" style={{ width: `clamp(124px, 30vw, 260px)`, }} />

          </div>
        </div>
        // smallgalleryInfo.map((image, index) => (
        //   <div
        //     key={index}
        //     style={{
        //       width: `clamp(${image.smallwidth}px, 30vw, ${image.width}px)`,
        //     }}
        //   >
        //     <img
        //       src={image.img}
        //       alt={image.title}
        //       style={{ width: '100%' }}
        //     />
        //   </div>
        // ))
      )}
    </div>
  );
};

export default GallerySection;