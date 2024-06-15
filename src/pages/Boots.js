import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './product-detail.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { addProduct } from '../store/cart';

const Boots = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.products); 

    const boots = [
        { id: 1, name: 'Boot Soft', preis: 50.00, category: 'boots' },
        { id: 2, name: 'Boot Middle', preis: 56.00, category: 'boots' },
        { id: 3, name: 'Boot Hard', preis: 80.00, category: 'boots' }
    ];

    const handleAddToCart = (boot) => {
        dispatch(addProduct({
            ...boot, 
            id: `${boot.category}-${boot.id}`,
            quantity: 1
        }));
    };

    const getProductQuantity = (boot) => {
        const product = cartItems.find(item => item.id === `${boot.category}-${boot.id}`);
        return product ? product.quantity : 0;
    };

    return (
        <div className='home-container'>
            <Header />
            <div className='centered-container'>
                <div className="product-detail-container">
                    <div className='snowboards-container'>
                        {boots.map(boot => (
                            <div className='snowboard-items' key={`${boot.category}-${boot.id}`}>
                                <h2>{boot.name}</h2>
                                <p>Preis: <strong>{boot.preis} Euro</strong></p>
                                <button onClick={() => handleAddToCart(boot)}>
                                    +
                                </button>
                                <span style={{ marginLeft: '10px' }}>Menge: {getProductQuantity(boot)}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Boots;
