import './chicha.css'

const BigOneChicha = ({ img }) => (
  <div className='chichaShow' >
    <span className='chicha-spin'>
      <img src={img} alt={img} />
    </span>
  </div>
)

const OneChichas = ({ img }) => (
  <span className='chicha-spin'>
    <img src={img} alt={img} style={{ width: 'clamp(35px, 5vw, 72px)' }} />
  </span>
)

const TwoChichas = ({ margin, img1, img2, rotate }) => (
  <div className='chichaShow' style={{ rotate: rotate, margin: margin }}>
    <span className='chicha-spin'>
      <img src={img1} alt={img1} />
    </span>
    <span className='chicha-back-spin '>
      <img src={img2} alt={img2} />
    </span>
  </div>
)

const TreeChichas = ({ img1, img2, img3 }) => (
  <div>
    <div className='chichaShow treeChichas'>
      <div style={{ marginTop: '35px' }}>
        <span className='chicha-spin'>
          <img src={img1} alt={img1} />
        </span>
      </div>
      <div style={{ margin: '5px 0 0 -5px' }}>
        <span className='chicha-back-spin' style={{ rotate: '15deg' }} >
          <img src={img2} alt={img2} />
        </span>
      </div>
      <div style={{ margin: '65px 0 0 -12px' }}>
        <span className='chicha-spin'>
          <img src={img3} alt={img3} />
        </span>
      </div>
    </div>
    <div className='chichaHidden'>
      <div className='oneChicha'>
        <span className='chicha-spin'>
          <img src={img3} alt={img3} style={{ width: '45px' }} />
        </span>
      </div>
    </div>
  </div>
)

export { BigOneChicha, OneChichas, TwoChichas, TreeChichas }