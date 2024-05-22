import React from 'react'
import './comStyle.css'



function Header() {
  return (
    <div>
        <div className='header-container'>
        <div className='header-item-1'>
            <a id='home-site'>Home</a>
            <a href=''>Sale</a>
            <a href=''>Frauen</a>
            <a href=''>Männer</a>
            <a href=''>Kinder</a>
        </div>

        <div className='header-item-2'>
        <button className='header-btn'>Login</button>
        <button className='header-btn'>Anmelden</button>
        <button className='header-btn'>Warenkorb</button>

        </div>
        </div>
    </div>
  )
}

export default Header