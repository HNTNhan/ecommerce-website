import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../Reducers/productReducer";
import categoryReducer from "../Reducers/categoryReducer";

export default configureStore({
  reducer: {
    product: productReducer,
    category: categoryReducer,
  },
});
