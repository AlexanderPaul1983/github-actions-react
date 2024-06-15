import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        products: [],
    },
    reducers: {
        addProduct: (state, action) => {
            const product = state.products.find(product => product.id === action.payload.id);
            if (product) {
                product.quantity += action.payload.quantity;
            } else {
                state.products.push({ ...action.payload, quantity: 1 });
            }
        },
        changeAmount: (state, action) => {
            const product = state.products.find(product => product.id === action.payload.id);
            if (product) {
                product.quantity = action.payload.quantity;
            }
        },
        removeProduct: (state, action) => {
            state.products = state.products.filter(product => product.id !== action.payload.id);
        },
        clearCart: (state) => {
            state.products = [];  // Setzt das Array der Produkte zurück
        }
    }
});

export const { addProduct, changeAmount, removeProduct, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
