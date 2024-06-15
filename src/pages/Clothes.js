import React from 'react';
import { useDispatch } from 'react-redux';
import './product-detail.css';
import Header from '../components/Header'; // Import des Headers
import Footer from '../components/Footer'; // Import des Footers
import { addProduct } from '../store/cart'; // Import der Redux-Aktion

const Clothes = () => {
    const dispatch = useDispatch();

    // Jedes Produkt erhält zusätzlich das Feld 'category'
    const clothes = [
        { id: 1, name: 'Clothe-1', preis: 50.00, category: 'clothes' },
        { id: 2, name: 'Clothe-2', preis: 56.00, category: 'clothes' },
        { id: 3, name: 'Clothe-3', preis: 80.00, category: 'clothes' }
    ];

    // Anpassen der handleAddToCart Funktion, um die Kategorie in die Produkt-ID einzubeziehen
    const handleAddToCart = (clothe) => {
        dispatch(addProduct({
            ...clothe, 
            id: `${clothe.category}-${clothe.id}`, // Kombinierte ID aus Kategorie und originaler ID
            quantity: 1
        }));
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
                                <p>Preis: </p><h3>{clothe.preis} Euro</h3>
                                <button onClick={() => handleAddToCart(clothe)}>
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

export default Clothes;
