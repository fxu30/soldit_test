import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import AccoutSideBar from '../components/AccoutSideBar'
import AccountSettingForm from '../components/AccountSettingForm'

import '../assets/css/style.css'

const AccountSettingPage = () => {
  return (
    <div className="flex-col-hstart-vstart clip-contents">
      <div className="flex-col-hcenter">
        <Header />
        <div className="main-container flex-row">
          <AccoutSideBar isAdmin={false} isSeller={false} />
          <AccountSettingForm />
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default AccountSettingPage