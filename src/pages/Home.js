import React from 'react'
import './style.css'
import Header from '../components/Header'
import ProductOverview from '../components/ProductOverview'
import Footer from '../components/Footer'


function Home() {
  return (
    <div className='home-container'>
      <Header></Header>
      <ProductOverview/>
      <Footer/>
    </div>
  )
}

export default Home
