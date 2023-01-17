import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./slices/basketSlice";

// The Global Store 
export const store = configureStore({
  reducer: {
    basket: basketReducer,
  },
});