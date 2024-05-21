import React, { useState } from 'react';
import './product-detail.css';

const Clothes = () => {
    const cloth1 = {
        id: 1,
        name: 'Snowboard-Jacke',
        preis: 299.00
    }
    const cloth2 = {
        id: 2,
        name: 'Snowboard-Hose',
        preis: 99.00
    }
    const cloth3 = {
        id: 3,
        name: 'Snowboard-Münze',
        preis: 35.00
    }

    const snowboards = [cloth1, cloth2, cloth3];

    const [auswahl, setAuswahl] = useState([]);
    const [gesamtPreis, setGesamtPreis] = useState(0);

    function addItem(cloths) {
        setAuswahl([...auswahl, cloths]);
        setGesamtPreis(prevPreis => prevPreis + cloths.preis);
    }

    const removeItem = (id) => {
        const updatedAuswahl = auswahl.filter(cloths => cloths.id !== id);
        const removedCloths = auswahl.find(cloths => cloths.id === id);
        setAuswahl(updatedAuswahl);
        setGesamtPreis(prevPreis => prevPreis - removedCloths.preis);
    }

    return (
        <div className="product-detail-container">
            <h1>Snowboards auswählen</h1>
            
            <div className='snowboards-container'>
                {snowboards.map(cloths => (
                    <div className='snowboard-items' key={cloths.id}>
                        <h2>{cloths.name}</h2>
                        <p>Preis: </p><h3>{cloths.preis} Euro</h3>
                        <button id='cart-btn'>Zum Warenkorb</button>
                        <button id='cart-btn' onClick={() => addItem(cloths)}>Auswählen</button>
                    </div>
                ))}
            </div>

            <h2>Ihre Auswahl:</h2>
            {auswahl.map(cloths => (
                <div key={cloths.id}>
                    <h4>{cloths.name}</h4>
                    <p>Preis: {cloths.preis} Euro</p>
                    <button id='auswahl-delete' onClick={() => removeItem(cloths.id)}>Auswahl löschen</button>
                </div>
            ))}

            <h2>Gesamtpreis: </h2>
            <h4>{gesamtPreis.toFixed(2)} Euro</h4>
            <button>Kaufen</button>
        </div>
    );
}

export default Clothes;
