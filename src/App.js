import React from 'react'
import Navbar from './component/Navbar'
import AdDescCard from './component/AdDescCard'
import AdDescSellerInfo from './component/AdDescSellerInfo'
import Footer from './component/Footer'
import './App.css'
import AdDescForm from './component/AdDescForm'

const App = () => {
  return (
    <>
      <Navbar />
      <main>

        <h2 className='ad-path'>Home {'>'} Buy & Sell {'>'} id 10086</h2>

        <hr />

        <section className='ad-desc'>

          <AdDescForm />

          <div className='left'>
            <AdDescSellerInfo />
            <div className='container btn buy'><h3>I want to buy</h3></div>
            <div className='container btn favorite'><h3>Favourtie</h3></div>
            <div className='container btn update'><h3>Update Ad</h3></div>
            <div className='container btn delete'><h3>Delete Ad</h3></div>
          </div>

        </section>

      </main>
      <Footer />
    </>
  )
}

export default App
