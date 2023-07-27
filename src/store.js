import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import productsReducer from "./reducers/productsReducer";

const store = configureStore({
  reducers: {
    products: productsReducer,
  },
  middleware: [thunk],
});
