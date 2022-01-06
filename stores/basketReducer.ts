import { /*createAsyncThunk,*/ createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../interfaces";
import { IBasket, IBasketItem } from "../interfaces/basket";

const initialState: IBasket = {
  totalPrice: 0,
  items: [],
};

// export const addItem = createAsyncThunk(
//   "basket/addItem",
//   async (data, thunkAPI) => {}
// );

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    clearBasket(state, action) {
      state.items = initialState.items;
      state.totalPrice = initialState.totalPrice;
    },
    addItem(state, action: { payload: IProduct }) {
      if (
        state.items.find((item) => item.product.slug === action.payload.slug)
      ) {
        state.items = state.items.map((item) => {
          if (item.product.slug === action.payload.slug) {
            item.quantity++;
            item.totalPrice = item.product.price * item.quantity;
          }
          return item;
        });
      } else {
        const basketItem: IBasketItem = {
          product: action.payload,
          quantity: 1,
          totalPrice: action.payload.price,
        };
        state.items.push(basketItem);
      }
      state.totalPrice = state.items.reduce(
        (total, item) => total + item.totalPrice,
        0
      );
    },
    removeItem(state, action: { payload: string }) {
      state.items = state.items.filter(
        (item) => item.product.slug !== action.payload
      );
      state.totalPrice = state.items.reduce(
        (total, item) => total + item.totalPrice,
        0
      );
    },
    setItemCount(state, action: { payload: { slug: string; count: number } }) {
      const item = state.items.find(
        (i) => i.product.slug === action.payload.slug
      );
      if (item) {
        item.quantity = action.payload.count;
        item.totalPrice = item.product.price * item.quantity;
        if (item.quantity === 0) {
          state.items = state.items.filter(
            (i) => i.product.slug !== action.payload.slug
          );
        }
      }
      state.totalPrice = state.items.reduce(
        (total, item) => total + item.totalPrice,
        0
      );
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(addItem.pending, (state) => {});
  //   builder.addCase(addItem.fulfilled, (state, action) => {});
  // },
});

export const { clearBasket, addItem, removeItem, setItemCount } =
  basketSlice.actions;
export default basketSlice.reducer;
