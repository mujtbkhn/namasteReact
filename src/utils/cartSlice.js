import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addItem: (state, action) => {
            state.push(action.payload)
        },
        removeItem: (state, action) => {
            const indexToRemove = state.findIndex((item) => item.id === action.payload.id);
      
            if (indexToRemove !== -1) {
              // Using Immer's produce function to update the draft
              state = state.filter((item, index) => index !== indexToRemove);
            }
      
            return state;
          },
        clearCart: (state) => {
            state.length = 0;
        },
    },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions

export default cartSlice.reducer