import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '@store';
import type {Cart} from '@types';

interface CartState {
  items: Cart[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<Cart>) {
      const index = state.items.findIndex(item => item.id === action.payload.id);

      if (index !== -1) {
        state.items[index].quantity += action.payload.quantity;
        return;
      }

      state.items.push(action.payload);
    },
    removeItem(state, action: PayloadAction<Cart>) {
      const index = state.items.findIndex(item => item.id === action.payload.id);

      if (index === -1) {
        return;
      }

      if (state.items[index].quantity > 1) {
        state.items[index].quantity -= 1;
        return;
      }

      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
  },
});

export const {addItem, removeItem} = cartSlice.actions;

export const getCartItems = (state: RootState) => state.cart.items;

export default cartSlice.reducer;
