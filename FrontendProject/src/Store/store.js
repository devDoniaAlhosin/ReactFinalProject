import { configureStore } from "@reduxjs/toolkit";
import { registerReducer } from "./registerSlice";
import { cartReducer } from "./cartSlice";

export const store = configureStore({
  reducer: {
    register: registerReducer,
    cart: cartReducer,
  },
});
