import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './product-detail.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { addProduct } from '../store/cart';

const Clothes = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.products);

    const clothes = [
        { id: 1, name: 'Snowboard-Jacket', preis: 59.00, category: 'clothes', imageUrl: 'https://www.ridestore.de/images/H0878_01_W1EkWGM.jpg?w=375&dpr=2' },
        { id: 2, name: 'Snowboard-Trouser', preis: 86.00, category: 'clothes', imageUrl: 'https://www.burton.com/static/product/W24/10188107001_4.png' },
        { id: 3, name: 'Snowboard-Underwear', preis: 24.00, category: 'clothes', imageUrl: 'https://img.fruugo.com/product/8/57/147255578_max.jpg' }
    ];

    const handleAddToCart = (clothe) => {
        dispatch(addProduct({
            ...clothe, 
            id: `${clothe.category}-${clothe.id}`,
            quantity: 1
        }));
    };

    const getProductQuantity = (clotheId) => {
        const product = cartItems.find(item => item.id === `${clotheId.category}-${clotheId.id}`);
        return product ? product.quantity : 0;
    };

    return (
        <div className='home-container'>
            <Header />
            <div className='centered-container'>
                <div className="product-detail-container">
                    <div className='snowboards-container'>
                        {clothes.map(clothe => (
                            <div className='snowboard-items' key={`${clothe.category}-${clothe.id}`}>
                                <h2>{clothe.name}</h2>
                                <img src={clothe.imageUrl} alt={clothe.name} style={{ width: '100px', height: '100px' }} />
                                <p>Preis: <strong>{clothe.preis} Euro</strong></p>
                                <button onClick={() => handleAddToCart(clothe)}>+</button>
                                <span style={{ marginLeft: '10px' }}>Menge im Warenkorb: {getProductQuantity(clothe)}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Clothes;
