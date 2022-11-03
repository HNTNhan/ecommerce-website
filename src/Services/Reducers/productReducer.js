import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currProduct: null,
  products: [],
  topSellers: [],
  newProducts: [],
  filterProducts: [],
  totalFilterProduct: 0,
  page: 1,
  numProduct: 5,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
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
    resetCurrProduct: (state, action) => {
      state.currProduct = initialState.currProduct;
    },
    setCurrProduct: (state, action) => {
      state.currProduct = action.payload;
    },
  },
});

export const {
  setTopSellers,
  setNewProducts,
  setFilterProducts,
  setPage,
  setCurrProduct,
  resetCurrProduct,
} = productSlice.actions;

export default productSlice.reducer;
