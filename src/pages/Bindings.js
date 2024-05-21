import React, { useState } from 'react';
import './product-detail.css';

const Bindings = () => {
    const snowboard1 = {
        id: 1,
        name: 'Bindung-1',
        preis: 100.00
    }
    const snowboard2 = {
        id: 2,
        name: 'Bindung-2',
        preis: 90.00
    }
    const snowboard3 = {
        id: 3,
        name: 'Bindung-3',
        preis: 170.00
    }

    const snowboards = [snowboard1, snowboard2, snowboard3];

    const [auswahl, setAuswahl] = useState([]);
    const [gesamtPreis, setGesamtPreis] = useState(0);

    const addItem = (snowboard) => {
        setAuswahl([...auswahl, snowboard]);
        setGesamtPreis(prevPreis => prevPreis + snowboard.preis);
    }

    const removeItem = (id) => {
        const updatedAuswahl = auswahl.filter(snowboard => snowboard.id !== id);
        const removedSnowboard = auswahl.find(snowboard => snowboard.id === id);
        setAuswahl(updatedAuswahl);
        setGesamtPreis(prevPreis => prevPreis - removedSnowboard.preis);
    }

    return (
        <div className="product-detail-container">
            <h1>Snowboards auswählen</h1>
            
            <div className='snowboards-container'>
                {snowboards.map(snowboard => (
                    <div className='snowboard-items' key={snowboard.id}>
                        <h2>{snowboard.name}</h2>
                        <p>Preis: </p><h3>{snowboard.preis} Euro</h3>
                        <button id='cart-btn'>Zum Warenkorb</button>
                        <button id='cart-btn' onClick={() => addItem(snowboard)}>Auswählen</button>
                    </div>
                ))}
            </div>

            <h2>Ihre Auswahl:</h2>
            {auswahl.map(snowboard => (
                <div key={snowboard.id}>
                    <h4>{snowboard.name}</h4>
                    <p>Preis: {snowboard.preis} Euro</p>
                    <button id='auswahl-delete' onClick={() => removeItem(snowboard.id)}>Auswahl löschen</button>
                </div>
            ))}

            <h2>Gesamtpreis: </h2>
            <h4>{gesamtPreis.toFixed(2)} Euro</h4>
            <button>Kaufen</button>
        </div>
    );
}

export default Bindings;
