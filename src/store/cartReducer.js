
// actions.js
export const addItem = item => ({
    type: 'ADD_ITEM',
    payload: item
});

export const clearCart = () => ({
    type: 'CLEAR_CART'
});

export const removeItem = id => ({
    type: 'REMOVE_ITEM',
    payload: id
});

// reducers.js
const initialState = {
    auswahl: [],
    gesamtPreis: 0
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return {
                ...state,
                auswahl: [...state.auswahl, action.payload],
                gesamtPreis: state.gesamtPreis + action.payload.preis
            };
        case 'REMOVE_ITEM':
            const newAuswahl = state.auswahl.filter(item => item.id !== action.payload);
            const itemToRemove = state.auswahl.find(item => item.id === action.payload);
            return {
                ...state,
                auswahl: newAuswahl,
                gesamtPreis: state.gesamtPreis - itemToRemove.preis
            };
        case 'CLEAR_CART':  
            return {
                ...state,
                auswahl: [],
                gesamtPreis: 0
            };
        default:
            return state;
    }
};

export default cartReducer;