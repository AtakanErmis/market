import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "@stores/basketReducer";

export const store = configureStore({
  reducer: {
    basket: basketReducer,
  },
  devTools: process.env.NODE_ENV === "development",
});

export type AppState = ReturnType<typeof store.getState>;
