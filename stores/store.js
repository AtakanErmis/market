import { configureStore, createSelector } from "@reduxjs/toolkit";
import basketReducer from "./basketReducer";

export const isRootPageSelector = createSelector(
  (state) => state.ui.pathName,
  (path) => path === "/"
);

export const store = configureStore({
  reducer: {
    basket: basketReducer,
  },
  devTools: process.env.NODE_ENV === "development",
});
