import React from 'react'
import './comStyle.css'
import {useNavigate} from 'react-router-dom';
import { useDispatch } from 'react-redux';


function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/cart');
  } 
  
  return (
    <div>
        <div className='header-container'>
        <div className='header-item-1'>
            <a id='home-site' href='/'>Home</a>
            <a href='/boots'>Sale</a>
            <a href='/boots'>Frauen</a>
            <a href='/boots'>Männer</a>
            <a href='/boots'>Kinder</a>
        </div>

        <div className='header-item-2'>
        <button className='header-btn'>Login</button>
        <button className='header-btn'>Anmelden</button>
        <button className='header-btn' onClick={handleClick}>Warenkorb</button>

        </div>
        </div>
    </div>
  )
}

export default Header