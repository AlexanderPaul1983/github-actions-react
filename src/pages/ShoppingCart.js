import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeProduct, changeAmount, clearCart } from '../store/cart';  // Stelle sicher, dass clearCart importiert ist

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector(state => state.cart.products);

  const handleRemove = (id) => {
    dispatch(removeProduct({ id }));
  };

  const handleChangeAmount = (id, quantity) => {
    if (quantity > 0) {
      dispatch(changeAmount({ id, quantity }));
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
              <span>{product.name}</span>
              <span>
                Quantity:
                <button onClick={() => handleChangeAmount(product.id, product.quantity - 1)}>-</button>
                {product.quantity}
                <button onClick={() => handleChangeAmount(product.id, product.quantity + 1)}>+</button>
              </span>
              <button onClick={() => handleRemove(product.id)}>Remove</button>
            </div>
          ))}
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
  },
  product: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    borderBottom: '1px solid #ddd',
  },
  checkoutButton: {
    marginTop: '20px',
    padding: '10px 20px',
    backgroundColor: '#333',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
  },
};
export default ShoppingCart;
