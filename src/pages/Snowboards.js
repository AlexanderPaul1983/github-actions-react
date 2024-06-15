import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './product-detail.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { addProduct } from '../store/cart';

const Snowboards = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.products); 

    const snowboards = [
        { id: 1, name: 'Snowboard 1 Freestyle', preis: 500.00, category: 'snowboards', imageUrl: 'https://www.burton.com/static/product/W24/10704108000_1.png?impolicy=bglt&imwidth=766'},
        { id: 2, name: 'Snowboard 2 Freeride', preis: 560.00, category: 'snowboards' },
        { id: 3, name: 'Snowboard 3 AllMountain', preis: 800.00, category: 'snowboards' }
    ];

    const handleAddToCart = (snowboard) => {
        dispatch(addProduct({
            ...snowboard,
            id: `${snowboard.category}-${snowboard.id}`,
            quantity: 1
        }));
    };

 
    const getProductQuantity = (productId) => {
        const product = cartItems.find(item => item.id === `${productId.category}-${productId.id}`);
        return product ? product.quantity : 0;
    };

    return (
        <div className='home-container'>
            <Header />
            <div className='centered-container'>
                <div className="product-detail-container">
                    <div className='snowboards-container'>
                        {snowboards.map(snowboard => (
                            <div className='snowboard-items' key={`${snowboard.category}-${snowboard.id}`}>
                                <h2>{snowboard.name}</h2>
                                <p>Preis: <strong>{snowboard.preis} Euro</strong></p>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <button onClick={() => handleAddToCart(snowboard)}>
                                        +
                                    </button>
                                    <span style={{ marginLeft: '10px' }}>
                                        Menge im Warenkorb: {getProductQuantity(snowboard)}
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

export default Snowboards;
