import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import AccoutSideBar from '../components/AccoutSideBar'
import AccountSettingForm from '../components/AccountSettingForm'
import ReviewForm from '../components/ReviewForm'

import '../assets/css/style.css'

const PendingReviewPage = () => {
  return (
    <div className="account-page-settings flex-col-hstart-vstart clip-contents">
      <div className="flex-col-hcenter">
        <Header />
        <div className="main-container flex-row">
          <AccoutSideBar isAdmin={false} isSeller={false} />
          <ReviewForm />
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default PendingReviewPage