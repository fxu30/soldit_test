import React from 'react'
import img from '../assets/img/sample.jpg'

const AdDescForm = () => {
  return (
    <div className='container ad-info'>
        <div className='row'>
            <h2>Title</h2>
            <input type='text' placeholder='Your Title' />
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

        <div className='row'>
            <button>Select Image</button>
        </div>

        <div className='row row3'>
            <div className='type'>
            <h2>Ad Type</h2>
            <div className='type-content'>
                <select>
                    <option value="Select a type">Select a type</option>
                    <option value="Buy & Sell">Buy & Sell</option>
                    <option value="Job & Service">Job & Service</option>
                    <option value="Community">Community</option>
                </select>
                <select>
                    <option value="Fixed Price">Fixed Price</option>
                    <option value="Negociate">Negociate</option>
                </select>
                <input type='text' placeholder='Your Price' />
            </div>
            </div>
            <div className='postal-code'>
            <h2>Postal Code</h2>
            <input type='text' placeholder='Your Postal Code' />
            </div>
        </div>

        <div className='row'>
            <h2>Description</h2>
            <textarea name='description' placeholder='Your Description' rows='5' cols='40'></textarea>
        </div>
    </div>
  )
}

export default AdDescForm