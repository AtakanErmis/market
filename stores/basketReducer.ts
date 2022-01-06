import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IBasket } from "../interfaces/basket";

const initialState: IBasket = {
  totalPrice: 0,
  items: [],
};

export const addItem = createAsyncThunk(
  "basket/addItem",
  async (data, thunkAPI) => {}
);

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    clearBasket(state, action) {
      state.items = initialState.items;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addItem.pending, (state) => {});
    builder.addCase(addItem.fulfilled, (state, action) => {});
  },
});

export const { clearBasket } = basketSlice.actions;
export default basketSlice.reducer;
