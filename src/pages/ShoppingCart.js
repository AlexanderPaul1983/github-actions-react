import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeProduct, changeAmount, clearCart } from '../store/cart';  

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector(state => state.cart.products);

  // Berechnung der Gesamtsumme
  const total = products.reduce((acc, product) => acc + (product.preis * product.quantity), 0);

  const handleRemove = (id) => {
    dispatch(removeProduct({ id }));
  };

  const handleChangeAmount = (id, quantity, delta) => {
    const newQuantity = quantity + delta;
    if (newQuantity > 0) {
      dispatch(changeAmount({ id, quantity: newQuantity }));
    }
  };

  const handleCheckout = () => {
    dispatch(clearCart());
    navigate('/'); // Navigiere zur Hauptseite
  };

  return (
    <div style={styles.cartContainer}>
      <h1>Shopping Cart</h1>
      {products.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {products.map(product => (
            <div key={product.id} style={styles.product}>
              <span>{product.name} - {product.preis.toFixed(2)} Euro</span>
              <div style={styles.quantityControl}>
                <button style={styles.button} onClick={() => handleChangeAmount(product.id, product.quantity, -1)}>-</button>
                <span style={{ margin: '0 10px' }}>{product.quantity}</span>
                <button style={styles.button} onClick={() => handleChangeAmount(product.id, product.quantity, 1)}>+</button>
              </div>
              <button style={styles.button} onClick={() => handleRemove(product.id)}>Remove</button>
            </div>
          ))}
          <div style={styles.total}>
            <strong>Total: {total.toFixed(2)} Euro</strong>
          </div>
        </div>
      )}
      <button style={styles.checkoutButton} onClick={handleCheckout}>Checkout</button>
    </div>
  );
};
const styles = {
  cartContainer: {
    padding: '20px',
    maxWidth: '600px',
    margin: '0 auto',
    border: '1px solid #ccc', // leichter Rahmen um den Warenkorb
    backgroundColor: '#f9f9f9', // heller Hintergrund für den Warenkorb
    borderRadius: '8px', // abgerundete Ecken
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)' // subtiler Schatten für Tiefe
  },
  product: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    borderBottom: '1px solid #ddd',
    marginBottom: '10px', // Abstand zwischen Produkten
  },
  checkoutButton: {
    display: 'block', // macht den Button zu einem Blockelement
    width: '100%', // Button nimmt die volle Containerbreite ein
    padding: '10px 20px',
    backgroundColor: '#333',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    marginTop: '20px',
    borderRadius: '5px', // abgerundete Ecken für den Button
    fontWeight: 'bold' // Fett gedruckter Text
  },
  quantityControl: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '16px',
    color: '#333'
  },
  button: {
    padding: '5px 10px',
    margin: '0 5px',
    backgroundColor: '#e0e0e0', // helles Grau für den Button-Hintergrund
    color: '#333', // dunkle Schriftfarbe für Kontrast
    border: 'none',
    borderRadius: '4px', // leicht abgerundete Ecken
    cursor: 'pointer',
    fontSize: '16px'
  },
  buttonHover: {
    backgroundColor: '#ccc' // dunklerer Hintergrund beim Hover
  }


};

export default ShoppingCart;
