import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    warenkorb : [],
}


const clientSlice = createSlice({
    name: 'client',
    initialState,
    reducers:{
        setWarenkorb(state, action){
                state.warenkorb =action.payload;
        }
    },

});

export const {
    setWarenkorb,
} = clientSlice.actions;


export default clientSlice.reducer;