import React, { useState } from 'react';
import './product-detail.css';

const Clothes = () => {
    const clothes = [
        { id: 1, name: 'Snowboard-Jacke', preis: 299.00 },
        { id: 2, name: 'Snowboard-Hose', preis: 99.00 },
        { id: 3, name: 'Snowboard-Mütze', preis: 35.00 }
    ];

    const [auswahl, setAuswahl] = useState([]);
    const [gesamtPreis, setGesamtPreis] = useState(0);

    const addItem = (cloth) => {
        setAuswahl([...auswahl, cloth]);
        setGesamtPreis(prevPreis => prevPreis + cloth.preis);
    }

    const removeItem = (id) => {
        const updatedAuswahl = auswahl.filter(cloth => cloth.id !== id);
        const removedCloth = auswahl.find(cloth => cloth.id === id);
        if (removedCloth) {
            setAuswahl(updatedAuswahl);
            setGesamtPreis(prevPreis => prevPreis - removedCloth.preis);
        }
    }

    return (
        <div className="product-detail-container">
            <h1>Clothes auswählen</h1>
            
            <div className='snowboards-container'>
                {clothes.map(cloth => (
                    <div className='snowboard-items' key={cloth.id}>
                        <h2>{cloth.name}</h2>
                        <p>Preis: </p><h3>{cloth.preis} Euro</h3>
                        <button className='cart-btn' onClick={() => addItem(cloth)}>Zum Warenkorb</button>
                    </div>
                ))}
            </div>

            <h2>Ihre Auswahl:</h2>
            {auswahl.map(cloth => (
                <div key={cloth.id}>
                    <h4>{cloth.name}</h4>
                    <p>Preis: {cloth.preis} Euro</p>
                    <button className='auswahl-delete' onClick={() => removeItem(cloth.id)}>Auswahl löschen</button>
                </div>
            ))}

            <h2>Gesamtpreis: </h2>
            <h4>{gesamtPreis.toFixed(2)} Euro</h4>
            <button>Kaufen</button>
        </div>
    );
}

export default Clothes;
