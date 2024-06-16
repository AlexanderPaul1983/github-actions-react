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
        { id: 1, name: 'Bindung Soft', preis: 100.00, category: 'bindings', imageUrl: 'https://kmsport.pl/4667-large_default/union-bindings-union-strata-2024-white.jpg' },
        { id: 2, name: 'Bindung Middle', preis: 90.00, category: 'bindings', imageUrl: 'https://www.tradeinn.com/f/13991/139915278/union-binding-force-classic-snowboard-bindings.jpg' },
        { id: 3, name: 'Bindung Hard', preis: 170.00, category: 'bindings', imageUrl: 'https://pleasuresmilano.com/wp-content/uploads/2023/09/UN23_ATLAS_METALLIC-SILVER_01_clipped_rev_1.webp' }
    ];

    const handleAddToCart = (binding) => {
        dispatch(addProduct({
            ...binding, 
            id: `${binding.category}-${binding.id}`,
            quantity: 1
        }));
    };

    const getProductQuantity = (bindingId) => {
        const product = cartItems.find(item => item.id === `${bindingId.category}-${bindingId.id}`);
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
                                <img src={binding.imageUrl} alt={binding.name} style={{ width: '100px', height: '100px' }} />
                                <p>Preis: <strong>{binding.preis} Euro</strong></p>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <button onClick={() => handleAddToCart(binding)}>
                                        +
                                    </button>
                                    <span style={{ marginLeft: '10px' }}>
                                        Menge im Warenkorb: {getProductQuantity(binding)}
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

export default Bindings;
