import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    currProduct: null,
    products: [],
    topSellers: [],
    newProducts: [],
    filterProducts: [],
    totalFilterProduct: 0,
    page: 1,
    numProduct: 5,
  },
  reducers: {
    setTopSellers: (state, action) => {
      state.topSellers = action.payload;
    },
    setNewProducts: (state, action) => {
      state.newProducts = action.payload;
    },
    setFilterProducts: (state, action) => {
      state.filterProducts = action.payload.data;
      state.totalFilterProduct = action.payload.total;
      state.page = action.payload.page;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setCurrProduct: (state, action) => {
      state.currProduct = action.payload;
    },
  },
});

export const { setTopSellers, setNewProducts, setFilterProducts, setPage, setCurrProduct } =
  productSlice.actions;

export default productSlice.reducer;
