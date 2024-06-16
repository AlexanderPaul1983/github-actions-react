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
        { id: 1, name: 'Boot Soft', preis: 50.00, category: 'boots', imageUrl: 'https://www.agnarchy.com/wp-content/uploads/2021/05/2022-Delux_Spark_XV.jpg' },
        { id: 2, name: 'Boot Middle', preis: 56.00, category: 'boots', imageUrl: 'https://deeluxe.com/wp-content/uploads/2022/12/x-plorer-dessert-green-1-300x300.jpg' },
        { id: 3, name: 'Boot Hard', preis: 80.00, category: 'boots', imageUrl: 'https://images.blue-tomato.com/is/image/bluetomato/304779545_front.jpg-eai1EaUwujhMef3vOPwH1mXoIFA/DNA+2024+Snowboard+Boots.jpg?$b8$' }
    ];

    const handleAddToCart = (boot) => {
        dispatch(addProduct({
            ...boot, 
            id: `${boot.category}-${boot.id}`,
            quantity: 1
        }));
    };

    const getProductQuantity = (bootId) => {
        const product = cartItems.find(item => item.id === `${bootId.category}-${bootId.id}`);
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
                                <img src={boot.imageUrl} alt={boot.name} style={{ width: '100px', height: '100px' }} />
                                <p>Preis: <strong>{boot.preis} Euro</strong></p>
                                <button onClick={() => handleAddToCart(boot)}>+</button>
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
