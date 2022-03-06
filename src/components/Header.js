import React from 'react'

const Header = () => {
  return (
    <>
    <div className="user-header-bar flex-row-vend-hstart">
          <p className="txt-261 flex-hcenter">SOLDIT</p>
          <div className="search-input" />
          <div className="search-button" />
          <p className="txt-729 flex-hcenter">Feiye Chen</p>
          <div className="group-1051">
            <p className="txt-923 flex-hcenter">Post Ad</p>
          </div>
        </div>
        <div className="menu-bar flex-row-vstart-hstart">
          <p className="txt-729 flex-hcenter">Buy & Sell</p>
          <p className="txt-729 flex-hcenter">Job & Service</p>
          <p className="txt-923 flex-hcenter">Community</p>
        </div>
    </>
  )
}

export default Header