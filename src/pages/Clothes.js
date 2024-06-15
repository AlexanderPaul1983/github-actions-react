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
        { id: 1, name: 'Snowboard-Jacket', preis: 59.00, category: 'clothes' },
        { id: 2, name: 'Snowboard-Trouser', preis: 86.00, category: 'clothes' },
        { id: 3, name: 'Snowboard-Underwear', preis: 24.00, category: 'clothes' }
    ];

    const handleAddToCart = (clothe) => {
        dispatch(addProduct({
            ...clothe,
            id: `${clothe.category}-${clothe.id}`,
            quantity: 1
        }));
    };

    const getProductQuantity = (clothe) => {
        const product = cartItems.find(item => item.id === `${clothe.category}-${clothe.id}`);
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
                                <p>Preis: <strong>{clothe.preis} Euro</strong></p>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <button onClick={() => handleAddToCart(clothe)}>
                                        +
                                    </button>
                                    <span style={{ marginLeft: '10px' }}>
                                        Menge im Warenkorb: {getProductQuantity(clothe)}
                                    </span>
                                </div>
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
