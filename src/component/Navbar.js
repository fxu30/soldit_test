import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='top'>
        <div className='content'>

          <span className='left'>
            <span className='logo'>SOLDIT</span>

            <span className='searchbox'>
              <input type='text' placeholder='Search Ads' />
              <button>Search</button>
            </span>
          </span>

          <ul className='list'>
            <li>
              Login
            </li>
            <li>
              Register
            </li>
            <li>
              <button>Post Ads</button>
            </li>
          </ul>

        </div>
      </div>
      <div className='menu'>
        <ul className='list'>
          <li className='lable'>Buy & Sell</li>
          <li>Job & Service</li>
          <li>Community</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar