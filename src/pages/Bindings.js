import React from 'react';
import { useDispatch } from 'react-redux';
import './product-detail.css';
import Header from '../components/Header'; // Import des Headers
import Footer from '../components/Footer'; // Import des Footers
import { addProduct } from '../store/cart'; // Import der Redux-Aktion

const Bindings = () => {
    const dispatch = useDispatch();

    const snowboards = [
        { id: 1, name: 'Bindung-1', preis: 100.00, category: 'bindings' },
        { id: 2, name: 'Bindung-2', preis: 90.00, category: 'bindings' },
        { id: 3, name: 'Bindung-3', preis: 170.00, category: 'bindings' }
    ];

    // Anpassen der handleAddToCart Funktion, um die Kategorie in die Produkt-ID einzubeziehen
    const handleAddToCart = (snowboard) => {
        dispatch(addProduct({
            ...snowboard, 
            id: `${snowboard.category}-${snowboard.id}`, // Kombinierte ID aus Kategorie und originaler ID
            quantity: 1
        }));
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
                                <p>Preis: </p><h3>{snowboard.preis} Euro</h3>
                                <button onClick={() => handleAddToCart(snowboard)}>
                                    +
                                </button>
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
