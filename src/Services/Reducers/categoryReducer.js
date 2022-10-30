import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
  showFilterList: {
    room: true,
    materialAndColor: false,
    type: false,
  },
  filter: {
    room: null,
    types: [],
    materialsAndColors: [],
  },
  sorted: {
    popular: true,
    sale: false,
    new: false,
    lowPrice: false,
    highPrice: false,
  },
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setAllCategories: (state, actions) => {
      state.categories = actions.payload;
    },
    resetShowFilterList: (state, action) => {
      state.showFilterList = initialState.showFilterList;
    },
    setShowFilterList: (state, action) => {
      state.showFilterList = action.payload;
    },
    resetFilter: (state, action) => {
      state.filter = initialState.filter;
    },
    setFilter: (state, aciton) => {
      state.filter = aciton.payload;
    },
    setFilterRoom: (state, action) => {
      state.filter.room = action.payload;
    },
    setSorted: (state, action) => {
      state.sorted = action.payload;
    },
    resetSorted: (state, action) => {
      state.sorted = initialState.sorted;
    },
  },
});

export const {
  setAllCategories,
  resetShowFilterList,
  setShowFilterList,
  resetFilter,
  setFilter,
  setFilterRoom,
  setSorted,
  resetSorted,
} = categorySlice.actions;

export default categorySlice.reducer;
