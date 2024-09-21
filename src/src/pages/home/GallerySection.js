import { useState, useEffect } from 'react'
import { galleryInfo } from '../../constant/group'

const GallerySection = () => {

  const [screenSize, setScreenSize] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className='hero_wrapper section'>
      <p className='sectionHeader sectionTitle' style={{ textAlign: 'center' }}>Лучшие кейсы из портфолио</p>
      <div className='hero_main'>
        {screenSize >= 1040 ? (
          galleryInfo.map((image, index) => (
            <div key={index} style={{ position: 'relative', width: `${image.width}px` }}>
              <img src={image.img} alt={image.img} style={{ marginTop: `${image.top}px`, width: '100%' }} />
            </div>
          ))
        ) : (
          <div className='smallsection'>
            <div className='smallsectionitem'>
              <div className='imagesection'>
                <img src={galleryInfo[0].img} alt="Random Image1" />
              </div>
              <div className='imagesection imagesecR'>
                <img src={galleryInfo[1].img} alt="Random Image2" style={{ width: '100%' }} />
              </div>
            </div>
            <div className='smallsectionitem'>
              <div>
                <div className='imagesection imgsec3'>
                  <img src={galleryInfo[2].img} alt="Random Image3" />
                </div>
                <div className='imagesection'>
                  <img src={galleryInfo[6].img} alt="Random Image4" />
                </div>
              </div>
              <div>
                <div className='imagesection imgsec5'>
                  <img src={galleryInfo[3].img} alt="Random Image5" />
                </div>
                <div className='imagesection imgsec5'>
                  <img src={galleryInfo[4].img} alt="Random Image6" />
                </div>
              </div>
            </div>
            <div style={{ margin: '0px' }} className='smallsec_main'>
              <div className='imagesection imgsec7'>
                <img src={galleryInfo[5].img} alt="Random Image7" />
              </div>
            </div>

            <div style={{ display: 'flex' }}>
              <div className='imagesection imgsec8'>
                <img src={galleryInfo[7].img} alt="Random Image8" />
              </div>
              <div className='imagesection imgsec9'>
                <img src={galleryInfo[8].img} alt="Random Image9" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default GallerySection
