import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './product-detail.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { addProduct } from '../store/cart';

const Bindings = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.products);

    const bindings = [
        { id: 1, name: 'Bindung Soft', preis: 100.00, category: 'bindings' },
        { id: 2, name: 'Bindung Middle', preis: 90.00, category: 'bindings' },
        { id: 3, name: 'Bindung Hard', preis: 170.00, category: 'bindings' }
    ];

    const handleAddToCart = (binding) => {
        dispatch(addProduct({
            ...binding, 
            id: `${binding.category}-${binding.id}`,
            quantity: 1
        }));
    };

    const getProductQuantity = (binding) => {
        const product = cartItems.find(item => item.id === `${binding.category}-${binding.id}`);
        return product ? product.quantity : 0;
    };

    return (
        <div className='home-container'>
            <Header />
            <div className='centered-container'>
                <div className="product-detail-container">
                    <div className='snowboards-container'>
                        {bindings.map(binding => (
                            <div className='snowboard-items' key={`${binding.category}-${binding.id}`}>
                                <h2>{binding.name}</h2>
                                <p>Preis: <strong>{binding.preis} Euro</strong></p>
                                <button onClick={() => handleAddToCart(binding)}>
                                    +
                                </button>
                                <span style={{ marginLeft: '10px' }}>Menge: {getProductQuantity(binding)}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Bindings;
