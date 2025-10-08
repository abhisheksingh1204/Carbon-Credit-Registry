import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    // Add other state slices here (e.g., cart: cartReducer)
  },
});

export default store;
