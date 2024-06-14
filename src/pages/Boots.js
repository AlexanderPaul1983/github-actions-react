import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './product-detail.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { addProduct } from '../store/cart';
const Boots = () => {
    const dispatch = useDispatch();
    const snowboards = [
        { id: 1, name: 'Boot-1', preis: 50.00 },
        { id: 2, name: 'Boot-2', preis: 56.00 },
        { id: 3, name: 'Boot-3', preis: 80.00 }
    ];

    const handleAddToCart = (snowboard) => {
        dispatch(addProduct({ ...snowboard, quantity: 1 }));
      };
    
      return (
        <div className='home-container'>
        <Header/>
        <div className='centered-container'>
        <div className="product-detail-container">            
            <div className='snowboards-container'>
                {snowboards.map(snowboard => (
                    <div className='snowboard-items' key={snowboard.id}>
                        <h2>{snowboard.name}</h2>
                        <p>Preis: </p><h3>{snowboard.preis} Euro</h3>
                        <button onClick={() => handleAddToCart(snowboard)}>
                            +
                        </button>
                    </div>
                ))}
            </div>
        </div>
        </div>
        <Footer/>
        </div>
    );
}

export default Boots;
