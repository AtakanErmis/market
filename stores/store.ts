import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./basketReducer";

export const store = configureStore({
  reducer: {
    basket: basketReducer,
  },
  devTools: process.env.NODE_ENV === "development",
});
