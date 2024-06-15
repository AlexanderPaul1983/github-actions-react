import React from 'react';
import { useDispatch } from 'react-redux';
import './product-detail.css';
import Header from '../components/Header'; // Import des Headers
import Footer from '../components/Footer'; // Import des Footers
import { addProduct } from '../store/cart'; // Import der Redux-Aktion

const Snowboards = () => {
    const dispatch = useDispatch();

    // Hinzufügen einer 'category' Eigenschaft zu jedem Produkt
    const snowboards = [
        { id: 1, name: 'Snowboard-1', preis: 500.00, category: 'snowboards' },
        { id: 2, name: 'Snowboard-2', preis: 560.00, category: 'snowboards' },
        { id: 3, name: 'Snowboard-3', preis: 800.00, category: 'snowboards' }
    ];

    // Anpassen der handleAddToCart Funktion, um eine eindeutige ID basierend auf Kategorie und ID zu verwenden
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

export default Snowboards;
