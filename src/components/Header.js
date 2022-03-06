import React from 'react'

const Header = () => {
    return (

        <div className="flex-col-hcenter">
            <div className="vistor-header-bar flex-row-vend-hstart">
                <p className="txt-664 flex-hcenter">SOLDIT</p>
                <div className="search-input" />
                <div className="search-button" />
                <p className="txt-352">Register</p>
                <p className="txt-4310 flex-hcenter">or</p>
                <p className="txt-368 flex-hend">Log in</p>
                <div className="group-054">
                    <p className="txt-311 flex-hcenter">Post Ad</p>
                </div>
            </div>
            <div className="menu-bar flex-row-vstart-hstart">
                <p className="txt-255 flex-hcenter">Buy & Sell</p>
                <p className="txt-255 flex-hcenter">Job & Service</p>
                <p className="txt-311 flex-hcenter">Community</p>
            </div>
        </div>


    )
}

export default Header