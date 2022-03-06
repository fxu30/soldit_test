import React from 'react'
import img from '../assets/img/sample.jpg'

const AdDescCard = () => {
  return (
    <div className='container ad-info'>
      <div className='row'>
        <h2>Title</h2>
        <p>Play Station 5</p>
      </div>
      <div className='row'>
        <h2>Image</h2>
        <div className='img-container'>
          <div className='main-img'>
            <img src={img} alt='' />
          </div>
          <div className='sub-img'>
            <div className='img-row'>
              <div className='img-column'>
                <img src={img} alt='' />
              </div>
              <div className='img-column'>
                <img src={img} alt='' />
              </div>
            </div>
            <div className='img-row'>
              <div className='img-column'>
                <img src={img} alt='' />
              </div>
              <div className='img-column'>
                <img src={img} alt='' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='row row3'>
        <div className='type'>
          <h2>Ad Type</h2>
          <div className='type-content'>
            <p>Buy & Sell</p>
            <p>Fixed Price</p>
            <p>$1700</p>
          </div>
        </div>
        <div className='postal-code'>
          <h2>Postal Code</h2>
          <p>M1V 2C2</p>
        </div>
      </div>
      <div className='row'>
        <h2>Description</h2>
        <p>Purchased in 2015. No issues. Come with box and receipt. Like new condition. Willing to drop off.</p>
      </div>
    </div>
  )
}

export default AdDescCard