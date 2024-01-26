import { configureStore } from "@reduxjs/toolkit";
import balanceReducer from "./balance/slice";

console.log(balanceReducer);

const store = configureStore({
  reducer: { balance: balanceReducer },
});

export default store;
