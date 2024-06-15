import React from 'react';
import { useDispatch } from 'react-redux';
import './product-detail.css';
import Header from '../components/Header'; // Import des Headers
import Footer from '../components/Footer'; // Import des Footers
import { addProduct } from '../store/cart'; // Import der Redux-Aktion

const Boots = () => {
    const dispatch = useDispatch();

    // Jedes Produkt erhält zusätzlich das Feld 'category'
    const boots = [
        { id: 1, name: 'Boot-1', preis: 50.00, category: 'boots' },
        { id: 2, name: 'Boot-2', preis: 56.00, category: 'boots' },
        { id: 3, name: 'Boot-3', preis: 80.00, category: 'boots' }
    ];

    // Anpassen der handleAddToCart Funktion, um die Kategorie in die Produkt-ID einzubeziehen
    const handleAddToCart = (boot) => {
        dispatch(addProduct({
            ...boot, 
            id: `${boot.category}-${boot.id}`, // Kombinierte ID aus Kategorie und originaler ID
            quantity: 1
        }));
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
                                <p>Preis: </p><h3>{boot.preis} Euro</h3>
                                <button onClick={() => handleAddToCart(boot)}>
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

export default Boots;
