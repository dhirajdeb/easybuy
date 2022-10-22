import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { ProductsState } from "./types";

const initialState: ProductsState = [];

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<ProductsState>) => {
      state.push(...action.payload);
    },
  },
});

export const { setProducts } = productSlice.actions;

export default productSlice.reducer;
