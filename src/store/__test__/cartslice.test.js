import cartReducer, { addProduct, changeAmount, removeProduct } from '../cart'

describe('cart reducer', () => {
  const initialState = {
    products: [],
  };

  it('should handle initial state', () => {
    expect(cartReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  it('should handle addProduct', () => {
    const product = { id: 1, name: 'Boot-1', preis: 50.00 };
    const actual = cartReducer(initialState, addProduct(product));
    expect(actual.products.length).toEqual(1);
    expect(actual.products[0]).toEqual({ ...product, quantity: 1 });
  });

  it('should handle addProduct with existing product', () => {
    const initialStateWithProduct = {
      products: [{ id: 1, name: 'Boot-1', preis: 50.00, quantity: 1 }],
    };
    const product = { id: 1, name: 'Boot-1', preis: 50.00 };
    const actual = cartReducer(initialStateWithProduct, addProduct(product));
    expect(actual.products.length).toEqual(1);
    expect(actual.products[0].quantity).toEqual(2);
  });

  it('should handle changeAmount', () => {
    const initialStateWithProduct = {
      products: [{ id: 1, name: 'Boot-1', preis: 50.00, quantity: 1 }],
    };
    const actual = cartReducer(initialStateWithProduct, changeAmount({ id: 1, quantity: 3 }));
    expect(actual.products[0].quantity).toEqual(3);
  });

  it('should handle removeProduct', () => {
    const initialStateWithProduct = {
      products: [{ id: 1, name: 'Boot-1', preis: 50.00, quantity: 1 }],
    };
    const actual = cartReducer(initialStateWithProduct, removeProduct({ id: 1 }));
    expect(actual.products.length).toEqual(0);
  });
});
