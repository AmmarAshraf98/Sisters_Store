import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCartopen: false,
  items: [],
  cart: [],
};

export const cartSlice = createSlice({
  initialState,
  name: "cart",
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },

    addToCart: (state, action) => {
      state.cart = [...state.cart, action.payload.item];
    },

    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },

    inCreaseCount: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          item.count++;
        }
        return item;
      });
    },

    deCreaseCount: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload.id && item.count > 1) {
          item.count--;
        }
        return item;
      });
    },

    setCartIsOpen: (state) => {
      state.isCartopen = !state.isCartopen;
    },
  },
});
export const {
  setItems,
  inCreaseCount,
  deCreaseCount,
  addToCart,
  removeFromCart,
  setCartIsOpen,
} = cartSlice.actions;
export default cartSlice.reducer;
