import React from 'react'
import './style.css'
import Header from '../components/Header'
import ProductOverview from '../components/ProductOverview'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom';

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
